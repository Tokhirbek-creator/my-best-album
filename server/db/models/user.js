const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Photo, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
