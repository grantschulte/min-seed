function get(req, res) {
  res.render("pages/home", {
    title: "Home"
  });
}

export {
  get
};
