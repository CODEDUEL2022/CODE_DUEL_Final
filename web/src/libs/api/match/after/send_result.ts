import { ReqSendResultType, ResSendResultType } from '../../../types/api';

export type Methods = {
  post: {
    reqBody: ReqSendResultType;
    resBody: ResSendResultType;
  };
};
