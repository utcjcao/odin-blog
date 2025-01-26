const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { postUser, getUser } = require("../db/queries");
require("dotenv").config();

class userController {
  constructor() {}
  getLoginPage = async (req, res) => {
    const userLoggedIn = !!req.user;
    return res.status(200).json({ userLoggedIn });
  };
  getSignUp = async (req, res) => {
    const userLoggedIn = !!req.user;
    return res.status(200).json({ userLoggedIn });
  };
  postLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "login info missing" });
    }
    const user = await getUser(username);
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "No user found" });
    }
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const jwt_data = jwt.sign({ user_id: user.id }, process.env.SECRET, {
      expiresIn: "3h",
    });
    return res.status(200).json({ data: jwt_data });
  };
  postSignUp = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "sign up info missing!" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await postUser(username, hashedPassword, false);
    const jwt_data = jwt.sign({ user_id: user.id }, process.env.SECRET, {
      expiresIn: "3h",
    });
    return res.status(200).json({ data: jwt_data });
  };
  postLogout = async (req, res) => {
    return res.status(200).json({});
    // to be determined b/c i think we have to handle this in the frontend by clearing localstorage
  };
}

module.exports = new userController();
