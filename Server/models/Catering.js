const {DataTypes}= require("sequelize")

module.exports =(sequelize)=>{
    sequelize.define(
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false
            },
            image:{
                type:DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    )
}