/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * CODE_DUEL API
 * CODE_DUELのAPI仕様書です。
 * OpenAPI spec version: 1.0
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  Combo
} from '../index.schemas'

export const getGetComboResponseMock = (overrideResponse: any = {}): Combo[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({cards: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({name: faker.helpers.arrayElement([faker.word.sample(), undefined]), type: faker.helpers.arrayElement([faker.helpers.arrayElement(['attack','heal','absorption'] as const), undefined]), value: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), type: faker.helpers.arrayElement([faker.helpers.arrayElement(['attack','heal','absorption'] as const), undefined]), value: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})))


export const getGetComboMockHandler = (overrideResponse?: Combo[]) => {
  return http.get('*/combo', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getGetComboResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getCombosMock = () => [
  getGetComboMockHandler()
]
