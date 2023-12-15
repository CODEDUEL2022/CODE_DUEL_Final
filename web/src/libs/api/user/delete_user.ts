import { ReqDeleteUserType, ResDeleteUserType } from '../../types/api';

export type Methods = {
  post: {
    reqBody: ReqDeleteUserType;
    resBody: ResDeleteUserType;
  };
};
