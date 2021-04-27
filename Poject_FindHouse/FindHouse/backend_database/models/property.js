"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  property.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
      price: DataTypes.STRING,
      area: DataTypes.STRING,
      rooms: DataTypes.STRING,
      address: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      zip: DataTypes.STRING,
      country: DataTypes.STRING,
      areasize: DataTypes.STRING,
      areapreix: DataTypes.STRING,
      landarea: DataTypes.STRING,
      landareasizepostfix: DataTypes.STRING,
      badrooms: DataTypes.STRING,
      bathrooms: DataTypes.STRING,
      garages: DataTypes.STRING,
      garagessize: DataTypes.STRING,
      yearbuilt: DataTypes.STRING,
      vediourl: DataTypes.STRING,
      virtualtour: DataTypes.STRING,
      amenities: DataTypes.STRING,
      images: DataTypes.STRING,
      attchements: DataTypes.STRING,
      plandecripation: DataTypes.STRING,
      palnbathrooms: DataTypes.STRING,
      planbedrooms: DataTypes.STRING,
      planprice: DataTypes.STRING,
      planimage: DataTypes.STRING,
      plansize: DataTypes.STRING,
      pricepostfix: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "property",
    }
  );
  return property;
};
