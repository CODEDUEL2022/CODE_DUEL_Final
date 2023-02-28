import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './match/after/send_result'
import type { Methods as Methods1 } from './match/before/custom_match'
import type { Methods as Methods2 } from './match/before/delete_room'
import type { Methods as Methods3 } from './match/before/leave_user'
import type { Methods as Methods4 } from './match/before/random_match'
import type { Methods as Methods5 } from './user/delete_user'
import type { Methods as Methods6 } from './user/get_user_info'
import type { Methods as Methods7 } from './user/login'
import type { Methods as Methods8 } from './user/make_user'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/match/after/send_result'
  const PATH1 = '/match/before/custom_match'
  const PATH2 = '/match/before/delete_room'
  const PATH3 = '/match/before/leave_user'
  const PATH4 = '/match/before/random_match'
  const PATH5 = '/user/delete_user'
  const PATH6 = '/user/get_user_info'
  const PATH7 = '/user/login'
  const PATH8 = '/user/make_user'
  const POST = 'POST'

  return {
    match: {
      after: {
        send_result: {
          post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
          $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`
        }
      },
      before: {
        custom_match: {
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        },
        delete_room: {
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json(),
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`
        },
        leave_user: {
          post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json(),
          $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH3}`
        },
        random_match: {
          post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['post']['resBody']>(prefix, PATH4, POST, option).json(),
          $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['post']['resBody']>(prefix, PATH4, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH4}`
        }
      }
    },
    user: {
      delete_user: {
        post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods5['post']['resBody']>(prefix, PATH5, POST, option).json(),
        $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods5['post']['resBody']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`
      },
      get_user_info: {
        post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody']>(prefix, PATH6, POST, option).json(),
        $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody']>(prefix, PATH6, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      login: {
        post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['post']['resBody']>(prefix, PATH7, POST, option).json(),
        $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['post']['resBody']>(prefix, PATH7, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH7}`
      },
      make_user: {
        post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods8['post']['resBody']>(prefix, PATH8, POST, option).json(),
        $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods8['post']['resBody']>(prefix, PATH8, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH8}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
