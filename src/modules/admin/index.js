const admin = require("./model");

module.exports = {
  // * Get request for admin: ...
  GET: async (_, res) => {
    const data = [{ admin: "/home" }];
    const all_companies = await admin.get_all_companies();
    const all_complex = await admin.get_all_complex();
    const all_rooms = await admin.get_all_rooms();
    try {
      return res.render("./admin", {
        data,
        all_companies,
        all_complex,
        all_rooms,
      });
    } catch (error) {
      if (error) throw new Error(error);
    }
  },

  GET2: async (req, res) => {
    const { name } = req.params;
    try {
      if (name == "companies") {
        const all_companies = await admin.get_all_companies();
        return res.send(all_companies);
      }
      if (name == "complex") {
        const all_complexes = await admin.get_all_complex();
        return res.send(all_complexes);
      }
      if (name == "rooms") {
        const all_rooms = await admin.get_all_rooms();
        return res.send(all_rooms);
      }
    } catch (error) {
      if (error) throw new Error(error);
    }
  },

  // * Post from /admin by id: ...
  POST: async (req, res) => {
    const { companyData, complexData, roomData } = req.body;
    if (companyData) {
      const { company_name, company_img } = companyData;
      const post_company = await admin.insert_company(
        company_name,
        company_img
      );
      return res.send({ msg: "Done ⛳" });
    }
    if (complexData) {
      const { complex_name, company_id } = complexData;
      const post_complex = await admin.insert_complex(complex_name, company_id);
      return res.send({ msg: "Done ⛳" });
    }
    if (roomData) {
      const {
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id,
      } = roomData;
      const post_room = await admin.insert_rooms(
        room_location,
        room_count,
        room_kv_metr,
        room_1kv_price,
        complex_id
      );
      return res.send({ msg: "Done ⛳" });
    }
  },

  DELETE: async (req, res) => {
    const { company_id, complex_id, room_id } = req.body;
    try {
      if (company_id) {
        const deleted_item = await admin.delete_company(company_id);
        return res.send({ msg: "Deleted 🦞" });
      }
      if (complex_id) {
        const deleted_item = await admin.delete_complex(complex_id);
        return res.send({ msg: "Deleted 🦞" });
      }
      if (room_id) {
        const deleted_item = await admin.delete_rooms(room_id);
        return res.send({ msg: "Deleted 🦞" });
      }
    } catch (error) {
      if (error) throw new Error(error);
    }
  },
};
