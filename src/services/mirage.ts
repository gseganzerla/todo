import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs'
import { Task } from './task'
import faker from '@faker-js/faker'

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      task: Model.extend<Partial<Task>>({}),
    },
    factories: {
      task: Factory.extend({
        title() {
          return faker.word.preposition()
        },
        isFinished() {
          return faker.datatype.boolean()
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
      this.timing = 300

      this.get('tasks')
      this.get('tasks/:id')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
