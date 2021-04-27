'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User, {foreignKey: 'userId'});
    Order.belongsTo(models.Product, {foreignKey: 'productId'});
  };
  return Order;
};
