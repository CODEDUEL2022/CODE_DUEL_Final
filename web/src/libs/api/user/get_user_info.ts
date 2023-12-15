import { ReqGetUserInfoType, ResGetUserInfoType } from '../../types/api';

export type Methods = {
  post: {
    reqBody: ReqGetUserInfoType;
    resBody: ResGetUserInfoType;
  };
};
