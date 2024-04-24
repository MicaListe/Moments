const {DataTypes}= require("sequelize")


module.exports =(sequelize)=>{
    sequelize.define(
        "Catering",
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
                type: DataTypes.TEXT,
                allowNull: false
            },
            type:{
                type:DataTypes.STRING,
                allowNull:false
            },
            image:{
                type:DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    )
}