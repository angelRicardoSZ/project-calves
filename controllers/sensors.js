const { Op } = require("sequelize");
let db = require("../database/models");


let sensorsController = {
    list: function(req, res) {
        db.Sensors.findAll()
        .then(function(items){
            res.render("List", {items:items,url:"/sensors/detail/", urladd:"/sensors/add",  name:"sensores", headers:["ID",  "ID cría", "Temperatura","Frec. resp.","Frec. card.","Frec. Sanguinea", "Fecha", "Descripción"]})
        })
        
    },   
    add: function(req,res){
        res.render("sensorRegister")
        
    },
    create: function(req, res) {
        db.sensors.create({
            id: req.body.id,
            temperature: req.body.temperature,
            respiratory_frequency:req.body.respiratory_frequency,            
            blood_frequency: req.body.blood_frequency,
            heart_rate: req.body.heart_rate,
            calves_id: req.body.calves_id,            
        });
        res.redirect("/sensors")
        
    },
    detail: function(req,res) {
        db.Sensors.findByPk(req.params.id)
            .then(function(sensor){
                res.render("sensorsDetail", {sensor:sensor})
            })
    },
    add: function(req,res){
        res.render("sensorsRegister")
    },
    create: function(req,res) {
        db.Sensors.create({
            temperature: req.body.temperature,
            respiratory_frequency:req.body.respiratory_frequency,
            blood_frequency:req.body.blood_frequency,
            heart_rate:req.body.heart_rate,
            calves_id:req.body.calves_id,
        });
        res.redirect("/sensors")

    },
    edit: function(req,res){
        db.Sensors.findByPk(req.params.id)
            .then(function(sensor){
                res.render("sensorsEdit", {sensor:sensor})
            })
    },
    update: function(req,res){
        db.Sensors.update({
            name: req.body.name,
            temperature:req.body.temperature,
            respiratory_frequency:req.body.respiratory_frequency,
            blood_frequency:req.body.blood_frequency,
            heart_rate:req.body.heart_rate,
            calves_id:req.body.calves_id
        }, {
            where: {
                id: req.params.id
            }
        })
        // console.log(req.body.weight)
        res.redirect("/sensors/detail/"+ req.params.id)
    },
    // deleteForm: function(req,res){
    //     db.Sensors.findByPk(req.params.id)
    //         .then(function(sensor){
    //             res.render("sensorsDelete", {sensor:sensor})
    //         })
        
    // },
    // delete: function(req,res){
    
        
    //     db.Sensors.destroy({
    //         where: {
    //             id:req.params.id
    //         },
    //         force: true
    //     })
    //     res.redirect("/sensors")
    // }
}

module.exports = sensorsController;
