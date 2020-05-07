import { schema } from "nexus";

schema.objectType({
  name: "users",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
  },
});
