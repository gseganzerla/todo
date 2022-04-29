import faker from '@faker-js/faker'
import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs'
import { Task } from './task'

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      task: Model.extend<Partial<Task>>({} as Task),
    },
    factories: {
      task: Factory.extend({
        title() {
          return faker.word.preposition()
        },
        isFinished() {
          return false
        },
        createdAt() {
          return faker.date.recent(5)
        },
      }),
    },
    seeds(server) {
      server.createList('task', 5)
    },
    routes() {
      this.namespace = 'api'
      this.timing = 500

      this.get('/tasks')
      this.post('/tasks')
      this.get('/tasks/:id')
      this.put('/tasks/:id')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
