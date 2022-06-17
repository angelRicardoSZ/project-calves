const { Op } = require("sequelize");
let db = require("../database/models");

let calvesController = {
    list: function(req, res) {
        db.Calves.findAll()
            .then(function(items){
                res.render("List", {items:items, url:"/calves/detail/", urladd:"/calves/add", name:"crías", headers:["ID", "Nombre", "Fecha ingreso", "Fecha egreso", "Color", "Marmoleo", "Peso", "ID proveedor", "descripción"]})
            })
    },
    // detail: function(req,res) {
    //     db.Calves.findByPk(req.params.id)
    //         .then(function(Breeding){
    //             res.render("calvesDetail", {Breeding:Breeding})
    //         })
    // },
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
            .then(function(items){
                //console.log(calvesTypeI)
                // res.render("calvesTypeI", {calvesTypeI:calvesTypeI})
                res.render("List", {items:items, url:"/calves/detail/", urladd:"/calves/add", name:"crías", headers:["ID", "Nombre", "Fecha ingreso", "Fecha egreso", "Color", "Marmoleo", "Peso", "ID proveedor", "descripción"]})
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
        .then(function(items){
                  
                res.render("List", {items:items, url:"/calves/detail/", urladd:"/calves/add", name:"crías", headers:["ID", "Nombre", "Fecha ingreso", "Fecha egreso", "Color", "Marmoleo", "Peso", "ID proveedor", "descripción"]})
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
        res.redirect("/calves/detail"+ req.params.id)
    },
    // deleteForm: function(req,res){
    //     console.log(req.params.id)
    //     db.Calves.findByPk(req.params.id)
    //         .then(function(breeding){
    //             res.render("calvesDelete", {breeding:breeding})
    //         })
    // },
    // delete: function(req,res){
    //     console.log("delete")
    //     console.log(req.params.id)
    //     db.Calves.destroy({
    //         where: {
    //             id:req.params.id
    //         },
    //         force: true
    //     })
    //     res.redirect("/calves")
    // }
}

module.exports = calvesController;