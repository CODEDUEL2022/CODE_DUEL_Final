exports.isAuthenticated = function(req, res, next){
    if (req.isAuthenticated()) {  // 認証済
        console.log("認証されました")
        return next();
    }
    else {  // 認証されていない
        console.log(req.isAuthenticated())
        res.redirect('/auth/google');  // ログイン画面に遷移
    }
}