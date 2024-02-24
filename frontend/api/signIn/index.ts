/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** ログインを行う。ブラウザにidが保存されている場合にリクエストが送られる。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.User

    reqBody: {
      user_id?: number | undefined
      user_name?: string | undefined
    }
  }
}
