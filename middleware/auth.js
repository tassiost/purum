module.exports = function(req, res, next) {
  if (req.session && req.session.adminLoggedIn) {
    // Admin is logged in, expose user info to views
    res.locals.user = { username: 'admin' };
    return next();
  }
  
  // Otherwise, redirect to login page
  req.session.redirectTo = req.originalUrl;
  res.redirect('/admin/login');
};
