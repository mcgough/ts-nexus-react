import { schema } from 'nexus'

schema.objectType({
  name: 'Item',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.description()
    t.model.price()
    t.model.image()
    t.model.large_image()
    t.model.created_at()
    t.model.updated_at()
  },
})
