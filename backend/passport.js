const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const bcrypt = require("bcryptjs");
const { getUser } = require("./db/queries");
require("dotenv").config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await getUser(payload.username);

      if (!user) {
        return done(null, false, { message: "no username found" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: "incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = { passport };
