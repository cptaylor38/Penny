const router = require("express").Router();
const healthController = require("../../controllers/healthController");

router
    .route('/:id')
    .put(healthController.delete);

router
    .route('/create')
    .post(healthController.create);


module.exports = router;