module.exports = (sequelize,dataTypes) => {
    let alias = "Diets";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        breakfast:{
            type: dataTypes.STRING,
            
        },
        eat:{
            type: dataTypes.STRING,
        },   
        dinner:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        } 
    };
    let config = {
        tableName: "diets",
        timestamps: false
    }    
    const Supplier = sequelize.define(alias, cols, config);
    return Supplier
}