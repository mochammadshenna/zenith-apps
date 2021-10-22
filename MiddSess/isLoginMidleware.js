function isLoginMiddleware(req, res, next) {
    if (req.session.sessionData) {
        res.locals.sessionData = req.session.sessionData
        next();
    } else {
        res.redirect("/login")
        // if (req.path === '/') {
        //     next()
        // } else {
        //     res.redirect("/login")
        // }
    }
}


module.exports = isLoginMiddleware;