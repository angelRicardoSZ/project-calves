module.exports = (sequelize,dataTypes) => {
    let alias = "Calves";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        date_entry:{
            type: dataTypes.DATE,
        },
        date_exit:{
            type: dataTypes.DATE,
        },
        color:{
            type: dataTypes.INTEGER
        },
        marmoleo:{
            type: dataTypes.INTEGER
        },
        weight:{
            type: dataTypes.DECIMAL
        },
        price:{
            type: dataTypes.DECIMAL
        },
        supplier_id:{
            type: dataTypes.INTEGER
        },
        description:{
            type: dataTypes.STRING
        }      
    };

    let config = {
        tableName: "calves",
        timestamps: false
    }
    
    
    const Calve = sequelize.define(alias, cols, config);
    
    // Calve.associate = function(models) {
    //     Calve.hasMany(models.Sensor, {
            
    //         as:"Sensor",
    //         // foreign_key:"calves_id"

    //     })
    // }

    return Calve

}