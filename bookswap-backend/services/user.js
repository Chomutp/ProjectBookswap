const passport = require("passport");
const jwt = require("jsonwebtoken");
const jwtOptions = require("../config/passport/passport");

module.exports = (app, db) => {
  app.post("/register", (req, res, next) => {
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        user
          .update({
            name: req.body.name,
            contact: req.body.contact,
            address: req.body.address,
            role: "user"
          })
          .then(() => {
            console.log("user created in db");
            res.status(200).send({ message: "user created" });
          })
          .catch(err => {
            console.error(err);
            res.status(400).send({ message: err.message });
          });
      }
    })(req, res, next);
  });

  app.post("/login", (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        if (info.message === "username or password is incorrect.") {
          res.status(401).send({ message: info.message });
        } else {
          res.status(400).send(info.message);
        }
      } else {
        const token = jwt.sign(
          {
            id: user.id,
            role: user.role,
            name: user.name,
            contact: user.contact,
            address: user.address
          },
          jwtOptions.secretOrKey,
          { expiresIn: 3600 }
        );
        res.status(200).send({
          auth: true,
          token,
          message: "user found & logged in"
        });
      }
    })(req, res, next);
  });
  app.get(
    "/detailUser",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.user
        .findAll({
          where: {
            id: req.user.id
          }
        })
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => {
          res.status(400).json("Not found your books");
        });
    }
  );

  app.get(
    "/protected-route",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      res.status(200).send(req.user);
    }
  );
};
