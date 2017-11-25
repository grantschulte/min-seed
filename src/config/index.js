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

const dirs = {
  root: rootDir,
  src: {
    root:     path.join(rootDir, "src"),
    views:    path.join(rootDir, "src", "views"),
    assets:   path.join(rootDir, "src", "assets")
  },
  build: {
    root:     path.join(rootDir, "build"),
    public:   path.join(rootDir, "build", "public"),
    server:   path.join(rootDir, "build", "server"),
    views:    path.join(rootDir, "build", "server", "views")
  },
  test: path.join(rootDir, "test"),
  bin:  path.join(rootDir, "bin")
};

const viewEngine = "pug";

export {
  config,
  dirs,
  viewEngine,
  wpConfig
};
