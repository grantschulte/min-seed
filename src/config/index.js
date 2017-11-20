import path from "path";
import dotenv from "dotenv";
dotenv.load();

const config = {
  env:  process.env.NODE_ENV,
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT
};

const dirs = {
  src:    path.join(__dirname, ".."),
  views:  path.join(__dirname, "..", "views"),
  public: path.join(__dirname, "..", "..", "public"),
  dist:   path.join(__dirname, "..", "..", "dist"),
  client: path.join(__dirname, "..", "..", "client"),
  test:   path.join(__dirname, "..", "..", "test"),
  bin:    path.join(__dirname, "..", "..", "bin")
};

const viewEngine = "pug";

export {
  config,
  dirs,
  viewEngine
};
