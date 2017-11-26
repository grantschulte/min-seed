import http from "http";
import app from "./app";
import { config } from "./config";
import { logServerConfig } from "./utils/logger";

const server = http.createServer(app);

server.listen(config.port, config.host, (err) => {
  logServerConfig(err);
});
