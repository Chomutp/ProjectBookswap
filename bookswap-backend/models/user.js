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

  // user.associate = models => {
  //   user.hasMany(models.post, { foreignKey: "user_id" });
  // };

  return user;
};
