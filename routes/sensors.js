var express = require('express');
var router = express.Router();
var sensorsController = require("../controllers/sensors")
/* GET users listing. */
router.get('/',sensorsController.list);

router.get('/add',sensorsController.add)
router.post('/add',sensorsController.create);

router.get('/detail/:id', sensorsController.detail)
router.get('/edit/:id',sensorsController.edit)
router.post('/edit/:id',sensorsController.update)

// router.get('/delete/:id',sensorsController.deleteForm);
// router.post('/delete/:id',sensorsController.delete);



module.exports = router;
