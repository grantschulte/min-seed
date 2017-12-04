import express from "express";
import { isDev } from "../config";
import * as controllers from "../controllers";

const router = express.Router();

router.get("/", controllers.home.get);
router.get("/find", controllers.locator);

export { router };
