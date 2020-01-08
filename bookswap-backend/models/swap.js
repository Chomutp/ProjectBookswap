module.exports = (sequelize, DataTypes) => {
  const swap = sequelize.define("swap", {
    request_to_user_id: {
      type: DataTypes.INTEGER(11)
    },
    request_to_book_id: {
      type: DataTypes.INTEGER(11)
    },
    request_from_user_id: {
      type: DataTypes.INTEGER(11)
    },
    request_from_book_id: {
      type: DataTypes.INTEGER(11)
    },
    status: {
      type: DataTypes.ENUM("request", "swaped", "block")
    }
  });

  return swap;
};
