const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const userService = require("./services/user");

// const postService = require("./services/post");
const cors = require("cors");

const app = express();

// import passport
const passport = require("passport");
const bookService = require("./services/book");
const swapService = require("./services/swap");
const fileUpload = require("express-fileupload");
const _ = require("lodash");

// use the strategy
app.use(passport.initialize());

app.use(
  fileUpload({
    createParentPath: true
  })
);

app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// import config of passport
require("./config/passport/passport");

db.sequelize.sync({ alter: false }).then(() => {
  userService(app, db);
  bookService(app, db);
  swapService(app, db);
  // postService(app, db);

  app.listen(9999, () => console.log("Server is running on port 9999"));
});
