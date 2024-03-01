/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** コンボを取得する */
  get: {
    query: {
      /** カードのID */
      cards: number[]
    }

    status: 200
    /** OK */
    resBody: Types.Combo[]
  }
}
