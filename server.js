const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Admin Authentication Credentials
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'purum2026';
const SESSION_SECRET = process.env.SESSION_SECRET || 'purum-minimalist-industrial-secret-key';

// Setup file upload configuration with Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*');
  }
}));
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Helper Functions for Data Access
const getDataPath = (filename) => path.join(__dirname, 'data', filename);

const readJSON = (filename) => {
  try {
    const filePath = getDataPath(filename);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return [];
  }
};

const writeJSON = (filename, data) => {
  try {
    const filePath = getDataPath(filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`Error writing to ${filename}:`, err);
    return false;
  }
};

// Site-wide setting middleware: inject site settings and logged-in user state into EJS context
app.use((req, res, next) => {
  res.locals.settings = readJSON('settings.json') || {};
  res.locals.user = (req.session && req.session.adminLoggedIn) ? { username: ADMIN_USERNAME } : null;
  next();
});

// Import Admin Authentication Middleware
const authMiddleware = require('./middleware/auth');

// --- PUBLIC ROUTES ---

// Homepage: load and show portfolio artworks
app.get('/', (req, res) => {
  const artworks = readJSON('portfolio.json');
  res.render('index', {
    title: 'WORK',
    activePage: 'home',
    artworks: artworks
  });
});

// Artwork detail view
app.get('/project/:id', (req, res) => {
  const artworks = readJSON('portfolio.json');
  const artwork = artworks.find(art => art.id === req.params.id);
  
  if (!artwork) {
    return res.status(404).send('Artwork not found');
  }
  
  res.render('project', {
    title: artwork.title,
    activePage: 'home',
    artwork: artwork,
    artworks: artworks
  });
});

// About page & Contact form view
app.get('/about', (req, res) => {
  const successMsg = req.session.successMsg;
  const errorMsg = req.session.errorMsg;
  delete req.session.successMsg;
  delete req.session.errorMsg;

  res.render('about', {
    title: 'ABOUT',
    activePage: 'about',
    successMsg,
    errorMsg
  });
});

// Process Contact form inquiry
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    req.session.errorMsg = 'ALL FIELDS ARE REQUIRED.';
    return res.redirect('/about#contact');
  }

  const messages = readJSON('messages.json');
  const newMessage = {
    id: 'msg-' + Date.now() + '-' + Math.round(Math.random() * 1000),
    name,
    email,
    subject,
    message,
    date: new Date().toISOString()
  };

  messages.push(newMessage);
  if (writeJSON('messages.json', messages)) {
    req.session.successMsg = 'INQUIRY SUBMITTED SUCCESSFULLY. WE WILL AUDIT YOUR REQUEST.';
  } else {
    req.session.errorMsg = 'SYSTEM ERROR. PLEASE TRY AGAIN LATER.';
  }
  res.redirect('/about#contact');
});

// --- ADMIN CONTROL PANEL ROUTES ---

// GET Admin Login view
app.get('/admin/login', (req, res) => {
  if (req.session && req.session.adminLoggedIn) {
    return res.redirect('/admin/dashboard');
  }
  const errorMsg = req.session.errorMsg;
  delete req.session.errorMsg;

  res.render('admin/login', {
    title: 'CMS AUTHORIZATION',
    activePage: 'admin',
    errorMsg
  });
});

// POST Admin Login processing
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.adminLoggedIn = true;
    const redirectUrl = req.session.redirectTo || '/admin/dashboard';
    delete req.session.redirectTo;
    return res.redirect(redirectUrl);
  } else {
    req.session.errorMsg = 'INVALID SYSTEM CREDENTIALS.';
    res.redirect('/admin/login');
  }
});

// GET Admin Logout
app.get('/admin/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// GET Admin Dashboard (protected)
app.get('/admin/dashboard', authMiddleware, (req, res) => {
  const artworks = readJSON('portfolio.json');
  const messages = readJSON('messages.json');
  
  const successMsg = req.session.successMsg;
  const errorMsg = req.session.errorMsg;
  delete req.session.successMsg;
  delete req.session.errorMsg;

  res.render('admin/dashboard', {
    title: 'CMS CONTROL PANEL',
    activePage: 'admin',
    artworks: artworks,
    messages: messages,
    successMsg,
    errorMsg
  });
});

// POST Admin update website settings (protected)
app.post('/admin/settings', authMiddleware, (req, res) => {
  const { artistName, tagline, profilePicture, biography, artistStatement, contactEmail, instagram, github } = req.body;
  
  const currentSettings = {
    artistName,
    tagline,
    profilePicture,
    biography,
    artistStatement,
    contactEmail,
    instagram,
    github
  };

  if (writeJSON('settings.json', currentSettings)) {
    req.session.successMsg = 'SITE SETTINGS UPDATED SUCCESSFULLY.';
  } else {
    req.session.errorMsg = 'FAILED TO UPDATE SITE CONFIGURATION.';
  }
  res.redirect('/admin/dashboard');
});

// GET Add Artwork Form (protected)
app.get('/admin/artwork/new', authMiddleware, (req, res) => {
  const errorMsg = req.session.errorMsg;
  delete req.session.errorMsg;

  res.render('admin/artwork', {
    title: 'ADD ARTWORK',
    activePage: 'admin',
    errorMsg
  });
});

// POST Add Artwork submission (protected)
app.post('/admin/artwork/new', authMiddleware, upload.single('imageFile'), (req, res) => {
  const { title, category, date, featured, imageUrl, description } = req.body;
  
  if (!title || !category || !date || !description) {
    req.session.errorMsg = 'REQUIRED FIELDS ARE MISSING.';
    return res.redirect('/admin/artwork/new');
  }

  let finalImageUrl = imageUrl || '';
  if (req.file) {
    finalImageUrl = `/uploads/${req.file.filename}`;
  }

  if (!finalImageUrl) {
    req.session.errorMsg = 'AN IMAGE SOURCE (URL OR FILE UPLOAD) MUST BE PROVIDED.';
    return res.redirect('/admin/artwork/new');
  }

  const artworks = readJSON('portfolio.json');
  const newArtwork = {
    id: 'art-' + Date.now(),
    title,
    category,
    description,
    imageUrl: finalImageUrl,
    date,
    featured: featured === 'true'
  };

  artworks.push(newArtwork);
  if (writeJSON('portfolio.json', artworks)) {
    req.session.successMsg = `PORTFOLIO ITEM "${title}" CREATED.`;
    res.redirect('/admin/dashboard');
  } else {
    req.session.errorMsg = 'FAILED TO SAVE PORTFOLIO ITEM.';
    res.redirect('/admin/artwork/new');
  }
});

// GET Edit Artwork Form (protected)
app.get('/admin/artwork/edit/:id', authMiddleware, (req, res) => {
  const artworks = readJSON('portfolio.json');
  const artwork = artworks.find(art => art.id === req.params.id);

  if (!artwork) {
    req.session.errorMsg = 'ARTWORK NOT FOUND.';
    return res.redirect('/admin/dashboard');
  }

  const errorMsg = req.session.errorMsg;
  delete req.session.errorMsg;

  res.render('admin/artwork', {
    title: `EDIT ${artwork.title}`,
    activePage: 'admin',
    artwork,
    errorMsg
  });
});

// POST Edit Artwork submission (protected)
app.post('/admin/artwork/edit/:id', authMiddleware, upload.single('imageFile'), (req, res) => {
  const { title, category, date, featured, imageUrl, description } = req.body;
  const artworks = readJSON('portfolio.json');
  const artworkIndex = artworks.findIndex(art => art.id === req.params.id);

  if (artworkIndex === -1) {
    req.session.errorMsg = 'ARTWORK NOT FOUND.';
    return res.redirect('/admin/dashboard');
  }

  if (!title || !category || !date || !description) {
    req.session.errorMsg = 'REQUIRED FIELDS ARE MISSING.';
    return res.redirect(`/admin/artwork/edit/${req.params.id}`);
  }

  let finalImageUrl = artworks[artworkIndex].imageUrl;
  if (req.file) {
    // If a new local image was uploaded, use it
    finalImageUrl = `/uploads/${req.file.filename}`;
    
    // Clean up previous uploaded file if it exists
    const previousImage = artworks[artworkIndex].imageUrl;
    if (previousImage.startsWith('/uploads/')) {
      const oldFilePath = path.join(__dirname, 'public', previousImage);
      if (fs.existsSync(oldFilePath)) {
        try { fs.unlinkSync(oldFilePath); } catch (e) { console.error(e); }
      }
    }
  } else if (imageUrl) {
    // If an external URL is provided instead, use that
    finalImageUrl = imageUrl;
  }

  artworks[artworkIndex] = {
    ...artworks[artworkIndex],
    title,
    category,
    description,
    imageUrl: finalImageUrl,
    date,
    featured: featured === 'true'
  };

  if (writeJSON('portfolio.json', artworks)) {
    req.session.successMsg = `PORTFOLIO ITEM "${title}" UPDATED successfully.`;
    res.redirect('/admin/dashboard');
  } else {
    req.session.errorMsg = 'FAILED TO SAVE PORTFOLIO ITEM.';
    res.redirect(`/admin/artwork/edit/${req.params.id}`);
  }
});

// POST Delete Artwork (protected)
app.post('/admin/artwork/delete/:id', authMiddleware, (req, res) => {
  const artworks = readJSON('portfolio.json');
  const artwork = artworks.find(art => art.id === req.params.id);

  if (!artwork) {
    req.session.errorMsg = 'ARTWORK NOT FOUND.';
    return res.redirect('/admin/dashboard');
  }

  // Delete the local uploaded image if any
  if (artwork.imageUrl.startsWith('/uploads/')) {
    const oldFilePath = path.join(__dirname, 'public', artwork.imageUrl);
    if (fs.existsSync(oldFilePath)) {
      try { fs.unlinkSync(oldFilePath); } catch (e) { console.error(e); }
    }
  }

  const updatedArtworks = artworks.filter(art => art.id !== req.params.id);
  if (writeJSON('portfolio.json', updatedArtworks)) {
    req.session.successMsg = `PORTFOLIO ITEM "${artwork.title}" REMOVED.`;
  } else {
    req.session.errorMsg = 'FAILED TO REMOVE PORTFOLIO ITEM.';
  }
  res.redirect('/admin/dashboard');
});

// POST Delete contact message (protected)
app.post('/admin/messages/delete/:id', authMiddleware, (req, res) => {
  const messages = readJSON('messages.json');
  const updatedMessages = messages.filter(msg => msg.id !== req.params.id);
  
  if (writeJSON('messages.json', updatedMessages)) {
    req.session.successMsg = 'MESSAGE REMOVED FROM ARCHIVE.';
  } else {
    req.session.errorMsg = 'FAILED TO REMOVE MESSAGE.';
  }
  res.redirect('/admin/dashboard');
});

// 404 Route handling
app.use((req, res) => {
  res.status(404).send('PAGE EXCLUDED OR NON-EXISTENT IN THE CURRENT GRID.');
});

// Listen on configured port
app.listen(PORT, () => {
  console.log(`STITCH ENGINE RUNNING AT PORT ${PORT}.`);
});
