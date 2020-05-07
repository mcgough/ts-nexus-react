import { nexusPrismaPlugin } from "nexus-prisma";
import { intArg, makeSchema, objectType, stringArg } from "nexus";

const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("email");
  },
});

const Item = objectType({
  name: "Item",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("description");
    t.int("price");
    t.string("image");
    t.string("imagelarge");
  },
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.field("items", {
      type: "Item",
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.items.findMany();
      },
    });
  },
});

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("createItem", {
      type: "Item",
      args: {
        title: stringArg({ nullable: false }),
        description: stringArg({ nullable: false }),
        price: intArg({ nullable: false }),
        image: stringArg(),
        imagelarge: stringArg(),
      },
      resolve: (_, _args, ctx) => {
        return ctx.prisma.items.create({
          data: {
            ..._args,
          },
        });
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, Mutation, User, Item],
  plugins: [],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
