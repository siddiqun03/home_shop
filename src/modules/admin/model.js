// * Variable: ...
const fetch_data = require("../../utils/pg");

// * Query for get data: ...
const get_all_companies_query = "SELECT * FROM company";
const get_all_complex_query = "SELECT complex_id, complex_name FROM complex";
const get_all_rooms_query = "SELECT room_id, room_location FROM rooms";

// * Funtion for get data: ...
const get_all_companies = () => fetch_data(get_all_companies_query);
const get_all_complex = () => fetch_data(get_all_complex_query);
const get_all_rooms = () => fetch_data(get_all_rooms_query);

// * Query for Insert: ...
const insert_company_query =
  "INSERT INTO company (company_name, company_img) VALUES ($1, $2)";
const insert_complex_query =
  "INSERT INTO complex (complex_name, company_id) VALUES ($1, $2)";

// * Function for send query: ...
const insert_company = (name, img) =>
  fetch_data(insert_company_query, name, img);
const insert_complex = (name, id) => fetch_data(insert_company_query, name, id);

// * Module export to use function: ...
module.exports = {
  get_all_companies,
  get_all_complex,
  get_all_rooms,
  insert_company,
  insert_complex,
};
