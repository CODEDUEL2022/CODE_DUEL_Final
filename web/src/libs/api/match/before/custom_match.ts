import { ReqCustomMatchType, ResCustomMatchType } from '../../../types/api';

export type Methods = {
  post: {
    reqBody: ReqCustomMatchType;
    resBody: ResCustomMatchType;
  };
};
