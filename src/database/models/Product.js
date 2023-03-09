module.exports= (sequelize, dataTypes) => {

    let alias = "Products";

    let config={
        tableName: 'Products',
        timesTamps:false,
    };

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type:dataTypes.INTEGER
        },
        name:{
            allowNull: false,
            type:dataTypes.VARCHAR(100)
        },
        price:{
            allowNull: false,
            type:dataTypes.VARCHAR(100)
        },
        talla:{
            allowNull: false,
            type:dataTypes.VARCHAR(20)
        },
        talla:{
            allowNull: false,
            type:dataTypes.VARCHAR(20)
        },
        marca:{
            type:dataTypes.VARCHAR(20)
        },
        discount:{
            type:dataTypes.TINYINT
        },
        image:{
            type:dataTypes.VARCHAR(100)
        }
    };

    const Product = sequelize.define(alias,cols,config);
}