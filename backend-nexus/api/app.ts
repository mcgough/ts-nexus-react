import { use, server } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
}

use(prisma())

server.express.use(cors(corsOptions))
