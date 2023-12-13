const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.JSONB({common:DataTypes.STRING,official:DataTypes.STRING}),
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    languages:{
      type: DataTypes.JSONB,
      allowNull: false,
    },
    coatOfArms:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    borders:{
      type:DataTypes.JSONB,
      allowNull: false
    },
    landlocked:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
    },
    demonyms:{
      type:DataTypes.STRING,
      allowNull:true
    },
  },{timestamps: false});
};