const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('videogame', {
    id: {       
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: { // COMPLETE 
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    platform:{
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    released:{ 
      type: DataTypes.STRING,
    },
    rating:{
      type: DataTypes.INTEGER
    },
    
    created: { // Que debería hacer con esto
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  },{timestamps : false});
};



