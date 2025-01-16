const { Router } = require("express");
const path = require("path");

const signUpRouter = Router();

signUpRouter.get("", async (req, res) => {
  // render signup page
});

signUpRouter.post("", async (req, res) => {
  // signup account
});

module.exports = { signUpRouter };
