const Mutations = {
  createItem(parent: any, args: any, ctx: any, info: any) {
    return ctx.db.items.create(
      {
        data: {
          ...args,
        },
      },
      info
    );
  },
};

export default Mutations;
