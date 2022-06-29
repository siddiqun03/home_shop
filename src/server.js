// Variables: ...
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const router = require("./route/router");
const PORT = process.env.PORT || 9000;

// App Set: Ejs...
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// App Use: ...
app.use(express());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
app.use("/*", (_, res) => res.status(404));

app.listen(PORT, console.log(PORT));
