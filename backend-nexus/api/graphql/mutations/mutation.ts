import { schema } from 'nexus'

schema.mutationType({
  definition(t) {
    t.crud.createOneCustomer()
    t.crud.deleteOneCustomer()
    t.crud.updateOneCustomer()
    t.crud.createOneItem()
    t.crud.deleteOneItem()
    t.crud.updateOneItem()
    t.field('createItemWithImage', {
      type: 'Item',
      resolve(root, args, ctx) {
        const item = ctx.db.item.create({
          data: {
            title: '',
            description: '',
            price: 100,
          },
        })
        return item
      },
    })
  },
})
