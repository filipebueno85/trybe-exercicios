/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const BookModel = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      publisher: DataTypes.STRING,
      // createAt: DataTypes.DATE,
      // updatedAt: DataTypes.DATE
    });

  return Book;
};
// const BookModel = (sequelize, DataTypes) => {
//     const Book = sequelize.define('Book', {
//       title: DataTypes.STRING,
//       author: DataTypes.STRING,
//       pageQuantity: DataTypes.INTEGER
//       // createAt: DataTypes.DATE,
//       // updatedAt: DataTypes.DATE
//     }, {timestamps: true});

//   return Book;
// };

module.exports = BookModel;
