// api/user/login
export type ReqLoginUserType = {
  user_name: string;
  user_password: string;
};
export type ResLoginUserType = {
  is_success: Boolean;
  user_id: number;
  user_level: {
    exp: number;
    level: number;
  };
};

// api/user/make_user
export type ReqSignUpUserType = {
  user_name: string;
  user_password: string;
};
export type ResSignUpUserType = {
  is_success: Boolean;
};

// api/user/get_user_info
export type ReqGetUserInfoType = {
  user_id: number;
};
export type ResGetUserInfoType = {
  user_name: string;
  user_level: {
    exp: number;
    level: number;
  };
};

// api/user/delete_user
export type ReqDeleteUserType = {
  user_id: number;
};
export type ResDeleteUserType = {
  is_success: Boolean;
};

// api/match/after/send_result
export type ReqSendResultType = {
  user_id: string;
  result: number;
};
export type ResSendResultType = {
  is_success: Boolean;
};

// api/match/before/custom_match
export type ReqCustomMatchType = {
  user_id: number;
  game_id: string;
};
export type ResCustomMatchType = {
  game_id: string;
  is_full: Boolean;
};

// api/match/before/random_match
export type ReqRandomMatchType = {
  user_id: number;
};
export type ResRandomMatchType = {
  is_success: Boolean;
  ready_member: number;
};

// api/match/before/delete_room
export type ReqDeleteRoomType = {
  game_id: string;
  user_id: number;
};
export type ResDeleteRoomType = {
  is_success: Boolean;
};

// api/match/before/leave_user
export type ReqLeaveUserType = {
  user_id: number;
};
export type ResLeaveUserType = {
  is_success: Boolean;
};
