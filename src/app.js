import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { dirs, viewEngine } from "./config";
import { router as publicRoutes } from "./routes/public";
import * as errors from "./middleware/errors";

const app = express();

app
  .set("views", dirs.build.views)
  .set("view engine", viewEngine)
  .set("json spaces", 2);

// Middleware

app
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(express.static(dirs.build.public));

// Routes

app
  .use("/", publicRoutes)
  .use("*", (req, res) => {
    res
      .status(404)
      .render("404");
  });

// Error Handling

app
  .use(errors.log)
  .use(errors.server);

export default app;
