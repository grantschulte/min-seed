import path from "path";
import dotenv from "dotenv";
import wpConfig from "./wp-config";

dotenv.load();

const config = {
  env:  process.env.NODE_ENV,
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT
};

const rootDir = process.cwd();
const viewEngine = "pug";

const dirs = {
  root:   rootDir,
  src:    path.join(rootDir, "src"),
  views:  path.join(rootDir, "src", "views"),
  assets: path.join(rootDir, "src", "assets"),
  public: path.join(rootDir, "public"),
  dist:   path.join(rootDir, "dist"),
  test:   path.join(rootDir, "test"),
  bin:    path.join(rootDir, "bin")
};

export {
  config,
  dirs,
  viewEngine,
  wpConfig
};
