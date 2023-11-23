const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Activity', {
    id:{
      type: DataTypes.STRING,
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificult: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"],
      allowNull: false
    },
    season: {
      type: DataTypes.ENUM,
      values: ['primavera', 'verano', 'otoño', 'invierno' ],
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{timestamps: false});
};