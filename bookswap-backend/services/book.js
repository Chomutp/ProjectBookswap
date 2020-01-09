const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const _ = require("lodash");

module.exports = (app, db) => {
  app.get("/books", passport.authenticate("jwt", { session: false }), function(
    req,
    res
  ) {
    db.book
      .findAll(
        // {where:{user.id!==user}}
        {
          where: { user_id: { [Op.notIn]: [req.user.id] } }
        }
      )
      .then(data => {
        console.log(data);
        res.json(data);
      });
  });

  app.get("/getUserByBookId/:id", function(req, res) {
    db.book
      .findOne({
        where: {
          id: req.params.id
        },
        attributes: ["user_id"]
      })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  });

  app.get(
    "/mybooks",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.book
        .findAll({
          where: {
            user_id: req.user.id
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

  app.post("/addbook-pic", function(req, res) {
    db.book.create;
    try {
      if (!req.files) {
        res.send({
          status: false,
          message: "No file uploaded"
        });
      } else {
        //Use the name of the input field (i.e. "photo") to retrieve the uploaded file
        let photo = req.files.photos;
        let photoName = new Date().getTime() + ".jpeg";
        //Use the mv() method to place the file in upload directory (i.e. "uploads")
        photo.mv("./uploads/" + photoName);
        //send response
        res.send({
          status: true,
          message: "File is uploaded",
          data: {
            name: photoName,
            mimetype: photo.mimetype,
            size: photo.size
          }
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  app.delete(
    "/addbook/:id",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      db.book
        .destroy({ where: { id: req.params.id, user_id: req.user.id } })
        .then(result => {
          res.status(200).json("delete book id : " + " " + req.params.id);
        })
        .catch(error => {
          res.status(400).json({ message: error.message });
        });
    }
  );
};
