module.exports = {
  // * Get request for home: ...
  GET: async (req, res) => {
    const data = [{ admin: "/admin" }];
    try {
      if ((req.role = "admin")) {
        return res.render("./home", { data });
      }
      return res.render("./home");
    } catch (error) {
      if (error) throw new Error(error);
    }
  },
};
