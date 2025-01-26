const { Router } = require("express");
const path = require("path");
const { getSignUp, postSignUp } = require("../controllers/userController");

const signUpRouter = Router();

signUpRouter.get("", async (req, res) => {
  // render signup page
  await getSignUp(req, res);
});

signUpRouter.post("", async (req, res) => {
  // signup account
  await postSignUp(req, res);
});

module.exports = { signUpRouter };
