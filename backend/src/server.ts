import { server, schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";
import db from "./db";

use(prisma());

schema.addToContext((req) => ({ ...req, db }));

server.express.use();
