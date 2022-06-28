const jwt = require("jsonwebtoken");

module.exports = {
  check_token: async (req, res, next) => {
    const { access_token } = req.cookies;

    if (!access_token) return res.redirect("/Login");

    jwt.verify(access_token, process.env.SECRET_KET, async (err, decode) => {
      if (err instanceof jwt.TokenExpiredError) {
        return res.redirect("/Login");
      }
      if (err instanceof jwt.JsonWebTokenError) {
        return res.redirect("/Login");
      }
      req.id = decode.id;
      req.role = decode.role;
      next();
    });
  },
};
