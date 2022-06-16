var express = require('express');
var router = express.Router();
var dietsController = require("../controllers/diets")
/* GET users listing. */
router.get('/add',dietsController.add);
router.get('/',dietsController.list);
router.get('/detail/:id',dietsController.detail);
router.post('/add',dietsController.create);
router.get('/edit/:id', dietsController.edit)
router.post('/edit/:id', dietsController.update)
router.get('/delete/:id',dietsController.deleteForm)
router.post('/delete/:id', dietsController.delete)



module.exports = router;