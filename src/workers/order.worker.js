const { Worker } = require('bullmq');
const connection = require('../config/redis');
const ordersService = require('../services/orders.service');
new Worker(
'orders',
async (job) => {
try {
await ordersService.createOrder(job.data.order);
} catch (error) {
console.error(error);
}
},
{
connection,
concurrency: 10,
}
);
