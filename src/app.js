import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { config, dirs, viewEngine } from "./config";
import { router as publicRoutes } from "./routes/public";

const app = express();

app
  .set("views", dirs.views)
  .set("view engine", viewEngine)
  .set("json spaces", 2);

// Middleware

app
  .use(morgan("dev"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(express.static(dirs.public));


// Routes

app.use("/", publicRoutes);

// Error Handling

export default app;
