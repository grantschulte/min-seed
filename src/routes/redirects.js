import express from "express";
const router = express.Router();

router.get("/home", (req, res) => {
  res.redirect("/");
});

export { router };
