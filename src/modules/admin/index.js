module.exports = {
  // * Get request for admin: ...
  GET: async (_, res) => {
    try {
      return res.render("./admin");
    } catch (error) {
      if (error) throw new Error(error);
    }
  },
};
