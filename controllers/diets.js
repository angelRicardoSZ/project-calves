const { Op } = require("sequelize");
let db = require("../database/models");

let dietsController = {
    list: function(req, res) {
        db.Diets.findAll()
            .then(function(items){
                res.render("List", {items:items, url:"/diets/detail/", urladd:"/diets/add", name:"dietas", headers:["ID", "Desayuno", "Comida", "Cena"]})
            })
    },
    // detail: function(req,res) {
    //     db.Diets.findByPk(req.params.id)
    //         .then(function(diet){
    //             res.render("dietsDetail", {diet:diet})
    //         })
    // },
    add: function(req,res){
        res.render("dietsRegister")
    },
    create: function(req,res) {
        db.Diets.create({
            breakfast: req.body.breakfast,
            eat: req.body.eat,
            dinner:req.body.dinner,            
        });
        res.redirect("/diets")

    },
    edit: function(req,res){
        db.Diets.findByPk(req.params.id)
            .then(function(diet){
                res.render("dietsEdit", {diet:diet})
            })
    },
    update: function(req,res){
        db.Diets.update({
            breakfast: req.body.breakfast,
            eat: req.body.eat,
            dinner:req.body.dinner
        }, {
            where: {
                id: req.params.id
            }
        })
        // console.log(req.body.weight)
        res.redirect("/diets/detail/"+ req.params.id)
    },
    // deleteForm: function(req,res){
    //     db.Diets.findByPk(req.params.id)
    //         .then(function(diet){
    //             res.render("dietsDelete", {diet:diet})
    //         })
    // },
    // delete: function(req,res){
    //     db.Diets.destroy({
    //         where: {
    //             id:req.params.id
    //         },
    //         force: true
    //     })
    //     res.redirect("/diets")
    // }
}

module.exports = dietsController;