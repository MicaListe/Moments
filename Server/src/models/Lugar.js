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
                type: DataTypes.STRING,
                allowNull: false
            },
            city:{
                type: DataTypes.STRING,
                allowNull: false
            },
            image:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    )
}