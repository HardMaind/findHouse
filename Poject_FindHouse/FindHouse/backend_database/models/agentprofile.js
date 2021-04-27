"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agentprofile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agentprofile.init(
    {
      file: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      position: DataTypes.STRING,
      license: DataTypes.STRING,
      gst: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      fax: DataTypes.STRING,
      language: DataTypes.STRING,
      company: DataTypes.STRING,
      address: DataTypes.STRING,
      about: DataTypes.STRING,
      skype: DataTypes.STRING,
      website: DataTypes.STRING,
      facebook: DataTypes.STRING,
      twitter: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      instagram: DataTypes.STRING,
      youtube: DataTypes.STRING,
      pinterest: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Agentprofile",
    }
  );
  return Agentprofile;
};
