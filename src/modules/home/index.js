const home = require("./model");

module.exports = {
  // * Get request for home: ...
  GET: async (req, res) => {
    const data = [{ admin: "/admin" }];
    const all_companies = await home.all_companies();
    try {
      if ((req.role = "admin")) {
        res.data = all_companies;
        return res.render("./home", { data, all_companies });
      }
      return res.render("./home");
    } catch (error) {
      if (error) throw new Error(error);
    }
  },
  POST: async (req, res) => {
    const { companyId, complexId, findBank } = req.body;
    console.log(req.body);

    if (companyId) {
      const all_complex = await home.all_complex(companyId);
      return res.send(all_complex);
    }
    if (complexId) {
      const all_rooms = await home.all_rooms(complexId);
      return res.send(all_rooms);
    }
    if (findBank) {
      const find_bank = await home.find_bank(findBank);
      return res.send(find_bank);
    }

    res.send({ status: "Bad request" });
  },
};
