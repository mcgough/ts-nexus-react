const Query = {
  items(parent: any, args: any, ctx: any, info: any) {
    return ctx.db.items.findMany();
  },
};

export default Query;
