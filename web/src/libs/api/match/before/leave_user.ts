import { ReqLeaveUserType, ResLeaveUserType } from '../../../types/api';

export type Methods = {
  post: {
    reqBody: ReqLeaveUserType;
    resBody: ResLeaveUserType;
  };
};
