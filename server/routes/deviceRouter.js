const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const roleCheck = require('../middleware/checkRoleMiddleware');

router.post('/', roleCheck('ADMIN'), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;