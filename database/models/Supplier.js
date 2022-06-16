module.exports = (sequelize,dataTypes) => {
    let alias = "Suppliers";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING,
            //defaultValue: sequelize.NOW 
        },
        created_at:{
            type: dataTypes.DATE,
            //defaultValue: sequelize.NOW 
        }    
    };
    let config = {
        tableName: "suppliers",
        timestamps: false
    }    
    const Supplier = sequelize.define(alias, cols, config);
    return Supplier
}