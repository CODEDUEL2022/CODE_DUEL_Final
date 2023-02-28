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
export type ReqSignUpUserType = {
  user_name: String;
  user_password: String;
};
export type ResSignUpUserType = {
  is_success: Boolean;
};

// api/user/get_user_info
export type ReqGetUserInfoType = {
  user_id: Number;
};
export type ResGetUserInfoType = {
  user_name: String;
  user_level: {
    exp: Number;
    level: Number;
  };
};

// api/user/delete_user
export type ReqDeleteUserType = {
  user_id: Number;
};
export type ResDeleteUserType = {
  is_success: Boolean;
};
