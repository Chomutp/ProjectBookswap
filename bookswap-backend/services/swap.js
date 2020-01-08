const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post(
    "/swap-request-to",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.swap
        .create({
          request_to_book_id: req.body.request_to_book_id,
          request_from_book_id: req.body.request_from_book_id,
          request_to_user_id: req.body.request_to_user_id,
          request_from_user_id: req.user.id,
          status: "request"
        })
        .then(result => {
          res.status(200).send({
            message: `Sends request swap book to id: ${req.body.request_to_book_id}`
          });
        })
        .catch(err => {
          res.status(401).send({ message: err.message });
        });
    }
  );

  app.get(
    "/swap-to-list",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      const swapToList = await db.swap.findAll({
        raw: true,
        where: { request_from_user_id: req.user.id, status: "request" }
      });
      const fromBookIds = swapToList.map(
        request => request.request_from_book_id
      );
      const toBookIds = swapToList.map(request => request.request_to_book_id);

      const fromBookDetails = await db.book.findAll({
        raw: true,
        where: { id: { [Op.in]: fromBookIds } }
      });
      const toBookDetails = await db.book.findAll({
        raw: true,
        where: { id: { [Op.in]: toBookIds } }
      });
      let newLists = swapToList.map(req => {
        const request_to_book_name = toBookDetails.find(
          bookDetail => bookDetail.id === req.request_to_book_id
        ).name_book;
        const request_from_book_name = fromBookDetails.find(
          bookDetail => bookDetail.id === req.request_from_book_id
        ).name_book;

        return {
          ...req,
          request_to_book_name,
          request_from_book_name
        };
      });
      console.log(newLists);
      res.json(newLists);
    }
  );

  app.get(
    "/swap-from-list",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      const swapFromList = await db.swap.findAll({
        raw: true,
        where: { request_to_user_id: req.user.id }
      });
      const fromBookIds = swapFromList.map(
        request => request.request_from_book_id
      );
      const toBookIds = swapFromList.map(request => request.request_to_book_id);

      const fromBookDetails = await db.book.findAll({
        raw: true,
        where: { id: { [Op.in]: fromBookIds } }
      });
      const toBookDetails = await db.book.findAll({
        raw: true,
        where: { id: { [Op.in]: toBookIds } }
      });
      let newLists = swapFromList.map(req => {
        const request_to_book_name = toBookDetails.find(
          bookDetail => bookDetail.id === req.request_to_book_id
        ).name_book;
        const request_from_book_name = fromBookDetails.find(
          bookDetail => bookDetail.id === req.request_from_book_id
        ).name_book;

        return {
          ...req,
          request_to_book_name,
          request_from_book_name
        };
      });
      console.log(newLists);
      res.json(newLists);
    }
  );

  // app.get(
  //   "/swap-request-list",
  //   passport.authenticate("jwt", { session: false }),
  //   async function(req, res) {
  //     const requestList = await db.friend.findAll({
  //       where: { request_to_id: req.user.id, status: "request" },
  //       attributes: [["request_from_id", "id"]]
  //     });
  //     const requestListIds = requestList.map(request => request.id);
  //     const requestUser = await db.user.findAll({
  //       where: { id: { [Op.in]: requestListIds } },
  //       attributes: ["id", "name", "profile_img_url"]
  //     });
  //     res.send(requestUser);
  //   }
  // );

  // app.get(
  //   "/accept-swap-request/:id",
  //   passport.authenticate("jwt", { session: false }),
  //   async function(req, res) {
  //     db.friend
  //       .update({
  //         where: { request_from_id: req.params.id, request_to_id: req.user.id }
  //       })
  //       .then(result => {
  //         res.status(200).send("accept friend");
  //       })
  //       .catch(err => {
  //         res.status(400).send({ message: "something went wrong" });
  //       });
  //   }
  // );

  // app.get(
  //   "/deny-friend-request/:id",
  //   passport.authenticate("jwt", { session: false }),
  //   function(req, res) {
  //     // Lab 4
  //     db.friend
  //       .destroy({
  //         where: {
  //           status: "request",
  //           request_from_id: req.params.id,
  //           request_to_id: req.user.id
  //         }
  //       })
  //       .then(() => {
  //         res.status(200).send(`Don't want to be friend with ${req.params.id}`);
  //       })
  //       .catch(err => {
  //         res.status(400).send({ message: err.message });
  //       });
  //   }
  // );

  // app.get(
  //   "/delete-friend/:id",
  //   passport.authenticate("jwt", { session: false }),
  //   async function(req, res) {
  //     // Lab 5
  //     let targetFriend = await db.friend.findOne({
  //       where: {
  //         [Op.or]: [
  //           {
  //             request_from_id: req.user.id,
  //             request_to_id: req.params.id,
  //             status: "friend"
  //           },
  //           {
  //             request_from_id: req.params.id,
  //             request_to_id: req.params.id,
  //             status: "friend"
  //           }
  //         ]
  //       }
  //     });
  //     if (!targetFriend) {
  //       res
  //         .status(400)
  //         .send({ message: `friend id: ${req.params.id} not found` });
  //     } else {
  //       targetFriend.destroy();
  //       res
  //         .status(200)
  //         .send({ message: `friend id:${req.params.id} has been deleted` });
  //     }
  //   }
  // );
};
