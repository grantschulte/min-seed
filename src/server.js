import http from "http";
import app from "./app";
import { config } from "./config";
import { logServerConfig } from "./utils/logger";

const server = http.createServer(app);

app.set("port", config.port);

server.listen(config.port, config.host, (err) => {
  logServerConfig(err);
});
