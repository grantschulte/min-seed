import * as home from "./home";

function locator(req, res, next) {
  res.render("pages/find", {
    title: "Find"
  })
}

export {
  home,
  locator
};
