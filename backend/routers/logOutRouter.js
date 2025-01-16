const { Router } = require("express");
const path = require("path");

const logOutRouter = Router();

logOutRouter.post("", async (req, res) => {
  // logout account
});

module.exports = { logOutRouter };
