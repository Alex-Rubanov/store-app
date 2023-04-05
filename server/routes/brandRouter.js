const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const roleCheck = require('../middleware/checkRoleMiddleware');

router.post('/', roleCheck('ADMIN'), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;