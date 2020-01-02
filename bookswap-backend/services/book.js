const passport = require("passport");
const Sequelize = require("sequelize");

module.exports = (app, db) => {
  app.get(
    "/books",
    // passport.authenticate("jwt", { session: false }),
    (req, res) => {
      db.book.findAll().then(data => {
        res.json(data);
      });
    }
  );

  app.post(
    "/addbook",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.book
        .create({
          image_book: req.body.image_book,
          name_book: req.body.name_book,
          typeBook: req.body.typeBook,
          user_id: req.user.id
        })
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => {
          console.error(error);
          res.status(400).json("can't add book");
        });
    }
  );

  app.delete(
    "/addbook/:id",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      db.book
        .destroy({ where: { id: req.params.id } })
        .then(result => {
          res.status(200).json("delete book id : " + " " + req.params.id);
        })
        .catch(error => {
          res.status(400).json({ message: error.message });
        });
    }
  );
};
