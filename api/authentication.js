function isAuthenticated(req, res, next){
    if (req.isAuthenticated()) {  // 認証済
        return next();
    }
    else {  // 認証されていない
        console.log(req.isAuthenticated())
        res.redirect('/login');  // ログイン画面に遷移
    }
  }