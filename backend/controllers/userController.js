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
    const user = getUser(username);
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
    const user = await postUser(username, password, false);
    const jwt_data = jwt.sign({ user_id: user.id }, process.env.SECRET, {
      expiresIn: "3h",
    });
    return res.status(200).json({ data: jwt_data });
  };
  postLogout = async (req, res) => {
    res.status(200);
  };
}

module.exports = new userController();
