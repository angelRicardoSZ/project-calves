var express = require('express');
var router = express.Router();
var quarantinesController = require("../controllers/quarantines")
/* GET users listing. */
router.get('/add',quarantinesController.add);
router.get('/',quarantinesController.list);


//router.get('/detail/:id',quarantinesController.detail);
router.post('/add',quarantinesController.create);
router.get('/edit/:id', quarantinesController.edit)
router.post('/edit/:id', quarantinesController.update)
// router.get('/delete/:id',quarantinesController.deleteForm)
// router.post('/delete/:id', quarantinesController.delete)



module.exports = router;