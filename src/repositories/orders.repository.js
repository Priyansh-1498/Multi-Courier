const prisma = require('../config/db');
exports.findByOrderId = async (orderId) => {
return prisma.order.findUnique({
where: {
internalOrderId: orderId,
},
});
};
exports.createOrder = async (data) => {
return prisma.order.create({
data,
});
};
exports.updateOrder = async (id, data) => {
return prisma.order.update({
where: { id },
data,
});
};
