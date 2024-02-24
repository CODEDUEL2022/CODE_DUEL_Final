import aspida from '@aspida/fetch';
import api from '../../api/$api';

const fetchConfig = {
  cache: 'force-cache',
  next: {
    revalidate: 10, // 10秒間キャッシュ
  },
  baseURL: 'http://127.0.0.1:4010/',
  throwHttpErrors: true, // throw an error on 4xx/5xx, default is false
} as any;

export const apiClient = api(aspida(fetch, fetchConfig));
