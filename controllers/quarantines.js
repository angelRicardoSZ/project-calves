const { Op } = require("sequelize");
let db = require("../database/models");

let dietsController = {
    list: function(req, res) {
        db.Quarantines.findAll()
            .then(function(quarantines){
                res.render("quarantinesList", {quarantines:quarantines})
            })
    },
    detail: function(req,res) {
        db.Quarantines.findByPk(req.params.id)
            .then(function(quarantine){
                res.render("quarantinesDetail", {quarantine:quarantine})
            })
    },
    add: function(req,res){
        res.render("quarantinesRegister")
    },
    create: function(req,res) {
        db.Quarantines.create({
            calves_id: req.body.calves_id,
            diets_id: req.body.diets_id            
        });
        res.redirect("/quarantines")

    },
    edit: function(req,res){
        db.Quarantines.findByPk(req.params.id)
            .then(function(quarantine){
                res.render("quarantinesEdit", {quarantine:quarantine})
            })
    },
    update: function(req,res){
        db.Quarantines.update({
            calves_id: req.body.calves_id,
            diets_id: req.body.diets_id
        }, {
            where: {
                id: req.params.id
            }
        })
        // console.log(req.body.weight)
        res.redirect("/quarantines/detail/"+ req.params.id)
    },
    deleteForm: function(req,res){
        db.Quarantines.findByPk(req.params.id)
            .then(function(quarantine){
                res.render("quarantinesDelete", {quarantine:quarantine})
            })
    },
    delete: function(req,res){
        db.Quarantines.destroy({
            where: {
                id:req.params.id
            },
            force: true
        })
        res.redirect("/quarantines")
    }
}

module.exports = dietsController;