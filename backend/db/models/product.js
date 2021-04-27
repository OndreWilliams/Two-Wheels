'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    }
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.Order, {foreignKey: 'productId'});
    Product.hasMany(models.Review, {foreignKey: 'productId'});
  };
  return Product;
};
