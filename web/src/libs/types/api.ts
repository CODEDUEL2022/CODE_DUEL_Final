// api/user/login
export type ReqLoginUserType = {
  user_name: String;
  user_password: String;
};
export type ResLoginUserType = {
  is_success: Boolean;
  user_id: Number;
  user_level: {
    exp: Number;
    level: Number;
  };
};

// api/user/make_user
export type SignUpUserType = {
  is_success: Boolean;
};

// api/user/get_user_info
