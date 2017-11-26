import express from "express";
import { isDev } from "../config";
import * as controllers from "../controllers";

const router = express.Router();

router.get("/", controllers.home.get);

// Development Routes

if (isDev) {
  router.get("/styleguide", (req, res) => {
    res.render("pages/styleguide");
  });
}

export { router };
