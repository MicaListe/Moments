const {DataTypes}= require("sequelize")

module.exports=(sequelize)=>{
    sequelize.define(
        "Decoracion",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull:false
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false
            },
            image:{
                type: DataTypes.STRING,
                allowNull:false
            }
        }
    )
}