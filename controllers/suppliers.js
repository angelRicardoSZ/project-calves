const { Op } = require("sequelize");
let db = require("../database/models");

let suppliersController = {
    list: function(req, res) {
        db.Suppliers.findAll()
            .then(function(items){
                res.render("List", {items:items,url:"/sensors/detail/",urladd:"/suppliers/add",urledit:"/suppliers/edit/",  name:"proveedores", headers:["ID", "Nombre", "Fecha registro", "Edit"]})
            })
    },
    // detail: function(req,res) {
    //     db.Suppliers.findByPk(req.params.id)
    //         .then(function(supplier){
    //             res.render("supplierDetail", {supplier:supplier})
    //         })
    // },
    add: function(req,res){
        res.render("supplierRegister")
    },
    create: function(req,res) {
        db.Suppliers.create({
            name: req.body.name,            
        });
        res.redirect("/suppliers")

    },
    edit: function(req,res){
        db.Suppliers.findByPk(req.params.id)
            .then(function(supplier){
                res.render("supplierEdit", {supplier:supplier})
            })
    },
    update: function(req,res){
        db.Suppliers.update({
            name: req.body.name,
            
        }, {
            where: {
                id: req.params.id
            }
        })
        // console.log(req.body.weight)
        res.redirect("/suppliers/")
    },
    // deleteForm: function(req,res){
    //     console.log(req.params.id)
    //     db.Suppliers.findByPk(req.params.id)
    //         .then(function(supplier){
    //             res.render("supplierDelete", {supplier:supplier})
    //         })
        
    // },
    // delete: function(req,res){
    //     console.log("delete")
    //     console.log(req.params.id)
    //     db.Supplier.destroy({
    //         where: {
    //             id:req.params.id
    //         },
    //         force: true
    //     })
    //     res.redirect("/suppliers")
    // }
}

module.exports = suppliersController;