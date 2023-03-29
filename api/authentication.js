exports.isAuthenticated = function(req, res, next){
    if (req.isAuthenticated()) {  // 認証済
        return next();
    }
    else {  // 認証されていない
        console.log(req.isAuthenticated())
        res.redirect('/success');  // ログイン画面に遷移
    }
}