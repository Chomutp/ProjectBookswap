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

  app.put(
    "/accept-swap/:id1/:id2/:id3",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.swap
        .findOne({
          where: {
            request_from_user_id: req.params.id1,
            request_from_book_id: req.params.id2,
            request_to_book_id: req.params.id3,
            request_to_user_id: req.user.id
          }
        })
        .then(result => {
          result.update({
            status: "swaped"
          });
          res.status(200).send("Accept Swap");
        })
        .catch(err => {
          res.status(400).send({ message: "something went wrong" });
        });
    }
  );

  app.get(
    "/swap-to-list-swaped",
    passport.authenticate("jwt", { session: false }),
    async function(req, res) {
      const swapToList = await db.swap.findAll({
        raw: true,
        where: {
          [Op.or]: [
            // { request_to_user_id: req.user.id },
            { request_from_user_id: req.user.id }
          ],
          status: "swaped"
        }
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

  app.delete(
    "/deny-swap/:id1/:id2/:id3",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      console.log(req.params.id1);
      db.swap
        .findOne({
          where: {
            status: "request",
            request_from_user_id: req.params.id1,
            request_from_book_id: req.params.id2,
            request_to_book_id: req.params.id3,
            request_to_user_id: req.user.id
          }
        })
        .then(result => {
          console.log(result);
          result.destroy();

          res.send("xxx");
          // res
          //   .status(200)
          //   .send(
          //     `Deny book id: ${req.params.id2} (user id : ${req.params.id1})`
          //   );
        })
        .catch(err => {
          console.log(5);
          res.status(400).send({ message: err.message });
        });
    }
  );

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
