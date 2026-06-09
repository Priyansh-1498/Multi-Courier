const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');
const bulkController = require('../controllers/bulk.controller');
router.post('/', ordersController.createOrder);
router.get('/:orderId/track', ordersController.trackOrder);
router.post('/:orderId/cancel', ordersController.cancelOrder);
router.post('/bulk', bulkController.bulkOrders);
module.exports = router;
