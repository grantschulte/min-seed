function get(req, res) {
  res.render("home", {
    title: "Home"
  });
}

export {
  get
};
