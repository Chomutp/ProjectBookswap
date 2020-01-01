module.exports = (sequelize, DataTypes) => {
  const swap = sequelize.define("swap", {
    status: {
      type: DataTypes.ENUM("request", "swaped", "block")
    }
  });

  return swap;
};
