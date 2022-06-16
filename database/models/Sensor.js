module.exports = (sequelize,dataTypes) => {
    
    let alias = "Sensors";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temperature:{
            type: dataTypes.DECIMAL,
            //defaultValue: sequelize.NOW 
        },
        respiratory_frequency:{
            type: dataTypes.INTEGER
        },
        heart_rate:{
            type: dataTypes.INTEGER
        },
        blood_frequency:{
            type: dataTypes.INTEGER
        },
        date_analysis: {
            type: dataTypes.DATE,
        },
        calves_id:{
            type:dataTypes.INTEGER
        },
        description:{
            type: dataTypes.STRING
        }      

    };

    let config = {
        tableName: "sensor_data",
        timestamps: false
    }
    
    
    const Sensor = sequelize.define(alias, cols, config);
    
    // Sensor.associate = function(models) {
    //     Sensor.belongsTo(models.Calve )
    // }

    return Sensor

}