/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** ユーザーの登録を行う。初回アクセス時のみフロントからリクエストが送られる。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.User

    reqBody: {
      user_name?: string | undefined
    }
  }
}
