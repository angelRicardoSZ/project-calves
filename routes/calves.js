var express = require('express');
var router = express.Router();
var calvesController = require("../controllers/calves")
/* GET users listing. */
router.get('/add',calvesController.add);
router.get('/',calvesController.list);


router.get('/TypeI', calvesController.filter1);
router.get('/TypeII', calvesController.filter2 );

router.get('/detail/:id',calvesController.detail);
router.post('/add',calvesController.create);
router.get('/edit/:id', calvesController.edit)
router.post('/edit/:id', calvesController.update)
// router.get('/delete/:id',calvesController.deleteForm)
// router.post('/delete/:id', calvesController.delete)



module.exports = router;
