import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode
} from '../../../src/data/protocols/http-client'
import { faker } from '@faker-js/faker'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),

  method: faker.helpers.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.helpers.objectValue({ test: faker.internet.emoji }),
  headers: faker.helpers.objectValue({ test: faker.internet.emoji })
})

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return this.response
  }
}
