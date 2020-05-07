require("dotenv").config({ path: "variables.env" });
import createServer from "./createServer";
// import db from "./db";

const server = createServer();

// TODO: middleware here

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  (data: any) => {
    console.log(`Server is now running on http://localhost:${data.port}`);
  }
);
