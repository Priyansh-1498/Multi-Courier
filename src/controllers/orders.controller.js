const ordersService = require('../services/orders.service');
exports.createOrder = async (req, res, next) => {
    try {
    const response = await ordersService.createOrder(req.body);
    res.json(response);
    } catch (error) {
    next(error);
    }
    };
    exports.trackOrder = async (req, res, next) => {
    try {
    const response = await ordersService.trackOrder(req.params.orderId);
    res.json(response);
    } catch (error) {
    next(error);
    }
    };
    exports.cancelOrder = async (req, res, next) => {
    try {
    const response = await ordersService.cancelOrder(req.params.orderId);
    res.json(response);
    } catch (error) {
    next(error);
    }
    };
    