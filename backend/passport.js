const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const bcrypt = require("bcryptjs");
const { getUserById } = require("./db/queries");
require("dotenv").config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await getUserById(payload.user_id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = { passport };
