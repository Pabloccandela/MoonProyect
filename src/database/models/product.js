module.exports = (sequelize,dataTypes) => {

    const alias= 'Products';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:dataTypes.STRING(30),
        },
        price:{
            type:dataTypes.INTEGER,
        },
        minSize:{
            type:dataTypes.INTEGER,
        },
        maxSize:{
            type:dataTypes.INTEGER,
        },
        brand:{
            type:dataTypes.STRING(20),
        },
        discount:{
            type:dataTypes.TINYINT,
        },
        image:{
            type:dataTypes.STRING(200),
        },
    };

    const config = {
        tableName: "product",
        timestamps:false
    }

    const Cancion = sequelize.define(alias,cols,config);
    return Cancion;
}