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

// api/match/after/send_result
export type ReqSendResultType = {
  user_id: String;
  result: Number;
};
export type ResSendResultType = {
  is_success: Boolean;
};

// api/match/before/custom_match
export type ReqCustomMatchType = {
  user_id: Number;
  game_id: String;
};
export type ResCustomMatchType = {
  game_id: String;
  is_full: Boolean;
};

// api/match/before/random_match
export type ReqRandomMatchType = {
  user_id: Number;
};
export type ResRandomMatchType = {
  is_success: Boolean;
  ready_member: Number;
};

// api/match/before/delete_room
export type ReqDeleteRoomType = {
  game_id: String;
  user_id: Number;
};
export type ResDeleteRoomType = {
  is_success: Boolean;
};

// api/match/before/leave_user
export type ReqLeaveUserType = {
  user_id: Number;
};
export type ResLeaveUserType = {
  is_success: Boolean;
};
