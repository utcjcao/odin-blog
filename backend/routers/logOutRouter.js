const { Router } = require("express");
const path = require("path");
const { postLogout } = require("../controllers/userController");

const logOutRouter = Router();

logOutRouter.post("", async (req, res) => {
  // logout account
  await postLogout(req, res);
});

module.exports = { logOutRouter };
