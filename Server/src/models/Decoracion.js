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
                type: DataTypes.TEXT,
                allowNull: false
            },
            type:{
                type:DataTypes.STRING,
                allowNull:false
            },
            image:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull:false
            }
        },
        {
            timestamps: false,
        }
    )
}