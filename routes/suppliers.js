var express = require('express');
var router = express.Router();
var suppliersController = require("../controllers/suppliers")
/* GET suppliers listing. */
router.get('/',suppliersController.list);
//router.get('/detail/:id', suppliersController.detail)
router.get('/edit/:id',suppliersController.edit)
router.post('/edit/:id',suppliersController.update)
router.get('/add',suppliersController.add)
router.post('/add',suppliersController.create);
// router.get('/delete/:id',suppliersController.deleteForm);
// router.post('/delete/:id',suppliersController.delete);

module.exports = router;
