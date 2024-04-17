const {DataTypes}= require("sequelize")

module.exports=(sequelize)=>{
    sequelize.define(
        "Usuario",
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull: false,
                autoIncremet: true,
                primaryKey:true
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            mail:{
                type:DataTypes.STRING,
                allowNull:false
            },
            password:{
                type:DataTypes.STRING,
                allowNull:false
            }, 
            roleId:{
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    )

}