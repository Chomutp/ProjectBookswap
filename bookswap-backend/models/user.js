module.exports = (sequelize, DataType) => {
  const user = sequelize.define("user", {
    username: {
      type: DataType.STRING(255)
    },
    password: {
      type: DataType.STRING(255)
    },
    role: {
      type: DataType.ENUM("admin", "user")
    }
  });

  user.associate = models => {
    user.hasMany(models.book, { foreignKey: "user_id" });
    user.belongsToMany(user, {
      as: "request_to",
      foreignKey: "request_to_id",
      through: models.swap
    });
    user.belongsToMany(user, {
      as: "request_from",
      foreignKey: "request_from_id",
      through: models.swap
    });
  };

  return user;
};
