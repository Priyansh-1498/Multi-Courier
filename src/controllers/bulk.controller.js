const bulkService = require('../services/bulk.service');
exports.bulkOrders = async (req, res, next) => {
try {
const response = await bulkService.processBulkOrders(req.body.orders);
res.json(response);
} catch (error) {
next(error);
}
}