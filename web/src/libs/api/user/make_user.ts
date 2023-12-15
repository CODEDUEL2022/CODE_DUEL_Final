import { ReqSignUpUserType, ResSignUpUserType } from '../../types/api';

export type Methods = {
  post: {
    reqBody: ReqSignUpUserType;
    resBody: ResSignUpUserType;
  };
};
