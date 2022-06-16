module.exports = (sequelize,dataTypes) => {
    
    let alias = "Quarantines";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        start_date: {
            type: dataTypes.DATE,
        },
        end_date:{
            type:dataTypes.INTEGER
        },
        status:{
            type: dataTypes.INTEGER
        },
        calves_id:{
            type: dataTypes.INTEGER
        },
        diets_id:{
            type: dataTypes.INTEGER
        }         

    };

    let config = {
        tableName: "quarantines",
        timestamps: false
    }
    
    
    const Quarantine = sequelize.define(alias, cols, config);
    
    // Sensor.associate = function(models) {
    //     Sensor.belongsTo(models.Calve )
    // }

    return Quarantine

}