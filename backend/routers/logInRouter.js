const { Router } = require("express");
const path = require("path");

const logInRouter = Router();

logInRouter.get("", async (req, res) => {
  // render login page
});

logInRouter.post("", async (req, res) => {
  // login account
});

module.exports = { logInRouter };
