module.exports = (sequelize, DataType) => {
  const book = sequelize.define("book", {
    image_book: {
      type: DataType.STRING(500)
    },
    name_book: {
      type: DataType.STRING(500)
    },
    typeBook: {
      type: DataType.STRING(500)
    },
    user_id: {
      type: DataType.INTEGER
    }
  });

  book.associate = models => {
    book.belongsToMany(book, {
      as: "request_to",
      foreignKey: "request_to_book_id",
      through: models.swap
    });
    book.belongsToMany(book, {
      as: "request_from",
      foreignKey: "request_from_book_id",
      through: models.swap
    });
    // book.hasMany(models.swap);
  };

  return book;
};
