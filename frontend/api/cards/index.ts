/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** カード一覧を取得する */
  get: {
    status: 200
    /** OK */
    resBody: Types.Card[]
  }
}