// Connect with datebase: ...
const fetch_data = require("../../utils/pg");

// Query for fetch data: ...
const all_companies_query = "SELECT * FROM company";

const all_complex_query =
  "select c.complex_id, c.complex_name from complex c where company_id = $1 ";

const all_rooms_query =
  "select r.room_id, r.room_location, r.room_count, r.room_kv_metr, ( room_1kv_price ) as totally from rooms r where complex_id = $1 ";

const find_bank_query =
  "(SELECT * FROM banks b WHERE b.bank_budget > $1) ORDER BY b.bank_budget LIMIT 1";

// Function for get data: ...
const all_companies = () => fetch_data(all_companies_query);
const all_complex = (id) => fetch_data(all_complex_query, id);
const all_rooms = (id) => fetch_data(all_rooms_query, id);
const find_bank = (id) => fetch_data(find_bank_query, id);

// Export data: ...
module.exports = {
  all_companies,
  all_complex,
  all_rooms,
  find_bank,
};
