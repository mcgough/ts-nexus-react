import { schema } from 'nexus'

schema.queryType({
  definition(t) {
    t.crud.customer()
    t.crud.customers({
      ordering: true,
      filtering: true,
      pagination: true,
    })
    t.crud.item()
    t.crud.items({
      ordering: true,
      filtering: true,
      pagination: true,
    })
  },
})
