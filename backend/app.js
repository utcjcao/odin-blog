const express = require("express");
const path = require("path");
const { logOutRouter } = require("./routers/logOutRouter");
const { logInRouter } = require("./routers/logInRouter");
const { signUpRouter } = require("./routers/signUpRouter");
const { blogRouter } = require("./routers/blogRouter");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/blogs", blogRouter);
app.use("/signup", signUpRouter);
app.use("/login", logInRouter);
app.use("/logout", logOutRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
