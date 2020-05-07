import { schema } from 'nexus'

schema.objectType({
  name: 'Customer',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
  },
})
