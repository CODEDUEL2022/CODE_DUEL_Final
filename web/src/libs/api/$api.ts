import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './user/delete_user'
import type { Methods as Methods1 } from './user/get_user_info'
import type { Methods as Methods2 } from './user/login'
import type { Methods as Methods3 } from './user/make_user'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user/delete_user'
  const PATH1 = '/user/get_user_info'
  const PATH2 = '/user/login'
  const PATH3 = '/user/make_user'
  const POST = 'POST'

  return {
    user: {
      delete_user: {
        post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
        $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      },
      get_user_info: {
        post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`
      },
      login: {
        post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json(),
        $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      },
      make_user: {
        post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json(),
        $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
