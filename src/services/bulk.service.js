const ordersQueue = require('../queues/orders.queue');
exports.processBulkOrders = async (orders) => {
const batchId = `BATCH_${Date.now()}`;
for (const order of orders) {
await ordersQueue.add('create-order', {
batchId,
order,
});
}
return {
batchId,
status: 'PROCESSING',
};
};
