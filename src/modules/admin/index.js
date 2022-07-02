module.exports = {
  // * Get request for admin: ...
  GET: async (_, res) => {
    const data = [{ admin: "/home" }];
    try {
      return res.render("./admin", { data });
    } catch (error) {
      if (error) throw new Error(error);
    }
  },
};
