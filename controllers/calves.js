const { Op } = require("sequelize");
let db = require("../database/models");

let calvesController = {
    list: function(req, res) {
        db.Calves.findAll()
            .then(function(calves){
                res.render("calvesList", {calves:calves})
            })
    },
    detail: function(req,res) {
        db.Calves.findByPk(req.params.id)
            .then(function(Breeding){
                res.render("calvesDetail", {Breeding:Breeding})
            })
    },
    filter1: function(req,res){
        db.Calves.findAll({
            where: {                
                [Op.and] : [
                    {
                        weight:{
                            [Op.between]: [10, 25],
        
                        }
                    },
                    {
                        color:{
                            [Op.in] : [3,4,5]
                        }
                    },
                    {
                        marmoleo:{
                            [Op.between] : [1,2]
                        } 
                    }
                ]
                
                
                
            }
        })
            .then(function(calvesTypeI){
                //console.log(calvesTypeI)
                res.render("calvesTypeI", {calvesTypeI:calvesTypeI})
            })
    },
    filter2: function(req, res) {
        db.Calves.findAll({
            where: {                
                [Op.and] : [
                    {
                        weight:{
                            [Op.notBetween]: [15, 25],
        
                        }
                    },
                    {
                        color:{
                            [Op.in] : [1,2,6,7]
                        }
                    },
                    {
                        marmoleo:{
                            [Op.between] : [3,5]
                        } 
                    }
                ]
                
                
                
            }
        })
            .then(function(calvesTypeII){
                  
                res.render("calvesTypeII", {calvesTypeII:calvesTypeII})
            })
    },
    add: function(req,res){
        res.render("calvesRegister")
    },
    create: function(req,res) {
        db.Calves.create({
            weight: req.body.weight,
            color: req.body.color,
            name:req.body.name,            
            marmoleo: req.body.marmoleo,
            price: req.body.price,
            description: req.body.description,
            supplier_id: req.body.supplier_id,
            
        });
        res.redirect("/calves")

    },
    edit: function(req,res){
        db.Calves.findByPk(req.params.id)
            .then(function(breeding){
                res.render("calvesEdit", {breeding:breeding})
            })
    },
    update: function(req,res){
        db.Calves.update({
            weight: req.body.weight,
            color: req.body.color,
            name:req.body.name,            
            marmoleo: req.body.marmoleo,
            price: req.body.price,
            description: req.body.description,
            supplier_id: req.body.supplier_id,
        }, {
            where: {
                id: req.params.id
            }
        })
        // console.log(req.body.weight)
        res.redirect("/calves/"+ req.params.id)
    },
    deleteForm: function(req,res){
        console.log(req.params.id)
        db.Calves.findByPk(req.params.id)
            .then(function(breeding){
                res.render("calvesDelete", {breeding:breeding})
            })
    },
    delete: function(req,res){
        console.log("delete")
        console.log(req.params.id)
        db.Calves.destroy({
            where: {
                id:req.params.id
            },
            force: true
        })
        res.redirect("/calves")
    }
}

module.exports = calvesController;