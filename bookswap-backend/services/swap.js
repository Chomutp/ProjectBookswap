const passport = require("passport");
// const Sequelize = require("sequelize");

module.exports = (app, db) => {
  app.get(
    "/swap-request-to/:id",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      db.swap
        .create({
          request_to_id: req.params.id,
          request_from_id: req.user.id,
          status: "request"
        })
        .then(result => {
          res.status(201).send({
            message: `Sends request swap book to id: ${req.params.id}`
          });
        })
        .catch(err => {
          res.status(401).send({ message: err.message });
        });
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
