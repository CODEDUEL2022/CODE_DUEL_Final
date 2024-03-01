import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_vrr7d } from './cards';
import type { Methods as Methods_16ia9xn } from './cards/_id@number';
import type { Methods as Methods_94chkk } from './combo';
import type { Methods as Methods_y6jzkj } from './deck';
import type { Methods as Methods_1onitws } from './signIn';
import type { Methods as Methods_1sjpvma } from './signUp';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/cards';
  const PATH1 = '/combo';
  const PATH2 = '/deck';
  const PATH3 = '/signIn';
  const PATH4 = '/signUp';
  const GET = 'GET';
  const POST = 'POST';

  return {
    cards: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * カードを取得する
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_16ia9xn['get']['resBody'], BasicHeaders, Methods_16ia9xn['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * カードを取得する
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_16ia9xn['get']['resBody'], BasicHeaders, Methods_16ia9xn['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * カード一覧を取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_vrr7d['get']['resBody'], BasicHeaders, Methods_vrr7d['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * カード一覧を取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_vrr7d['get']['resBody'], BasicHeaders, Methods_vrr7d['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    combo: {
      /**
       * コンボを取得する
       * @returns OK
       */
      get: (option: { query: Methods_94chkk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_94chkk['get']['resBody'], BasicHeaders, Methods_94chkk['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * コンボを取得する
       * @returns OK
       */
      $get: (option: { query: Methods_94chkk['get']['query'], config?: T | undefined }) =>
        fetch<Methods_94chkk['get']['resBody'], BasicHeaders, Methods_94chkk['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_94chkk['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    deck: {
      /**
       * デッキ一覧を取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_y6jzkj['get']['resBody'], BasicHeaders, Methods_y6jzkj['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * デッキ一覧を取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_y6jzkj['get']['resBody'], BasicHeaders, Methods_y6jzkj['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    signIn: {
      /**
       * ログインを行う。ブラウザにidが保存されている場合にリクエストが送られる。
       * @returns OK
       */
      post: (option: { body: Methods_1onitws['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1onitws['post']['resBody'], BasicHeaders, Methods_1onitws['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * ログインを行う。ブラウザにidが保存されている場合にリクエストが送られる。
       * @returns OK
       */
      $post: (option: { body: Methods_1onitws['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1onitws['post']['resBody'], BasicHeaders, Methods_1onitws['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    signUp: {
      /**
       * ユーザーの登録を行う。初回アクセス時のみフロントからリクエストが送られる。
       * @returns OK
       */
      post: (option: { body: Methods_1sjpvma['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1sjpvma['post']['resBody'], BasicHeaders, Methods_1sjpvma['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * ユーザーの登録を行う。初回アクセス時のみフロントからリクエストが送られる。
       * @returns OK
       */
      $post: (option: { body: Methods_1sjpvma['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1sjpvma['post']['resBody'], BasicHeaders, Methods_1sjpvma['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
