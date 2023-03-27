import { ReqLoginUserType, ResLoginUserType } from '../../types/api';

export type Methods = {
  post: {
    reqBody: ReqLoginUserType;
    resBody: ResLoginUserType;
  };
};
