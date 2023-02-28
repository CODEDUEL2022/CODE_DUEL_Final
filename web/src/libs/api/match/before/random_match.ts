import { ReqRandomMatchType, ResRandomMatchType } from '../../../types/api';

export type Methods = {
  post: {
    reqBody: ReqRandomMatchType;
    resBody: ResRandomMatchType;
  };
};
