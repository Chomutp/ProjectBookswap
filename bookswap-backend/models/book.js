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
  return book;
};
