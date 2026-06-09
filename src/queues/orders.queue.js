const { Queue } = require('bullmq');
const connection = require('../config/redis');
const ordersQueue = new Queue('orders', {
connection,
defaultJobOptions: {
attempts: 3,
backoff: {
type: 'exponential',
delay: 3000,
},
},
});
module.exports = ordersQueue;