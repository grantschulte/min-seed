import log from "winston";
import { config, isDev } from "../config";

log.cli();

function logServerConfig(err) {
  if (err) {
    log.error(err);
  }

  const url = ["http://", config.host, ":", config.port].join("");
  const env = isDev
    ? "development"
    : process.env.NODE_ENV;

  log.info("==========================================");
  log.info("Environment:", env);
  log.info("Listening at:", url);
  log.info("==========================================");
}

export { log, logServerConfig };
