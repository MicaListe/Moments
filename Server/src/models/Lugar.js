const {DataTypes} = require("sequelize")
module.exports=(sequelize)=>{
    sequelize.define(
       "Lugar",
       {
            id:{
                type:DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            city:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            image:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false
            },
            description:{
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [0, 1000], // Limita la longitud del texto
                }
            }
        },
        {
            timestamps: false,
        }
    )
}