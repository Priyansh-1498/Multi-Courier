const CourierFactory = require('../factory/courier.factory');
const repository = require('../repositories/orders.repository');
const prisma = require('../config/db');
exports.createOrder = async (payload) => {
const existing = await repository.findByOrderId(payload.orderId);
if (existing) {
    return existing;
    }
    const courier = CourierFactory.getCourier(payload.courierPartner);
    const response = await courier.createShipment(payload);
    return repository.createOrder({
    internalOrderId: payload.orderId,
    courierPartner: payload.courierPartner,
    courierOrderId: response.courierOrderId,
    awbNumber: response.awbNumber,
    shipmentStatus: response.status,
    courierRequest: payload,
    courierResponse: response.raw,
    });
    };
    exports.trackOrder = async (orderId) => {
    const order = await repository.findByOrderId(orderId);
    if (!order) {
    throw new Error('Order not found');
    }
    const courier = CourierFactory.getCourier(order.courierPartner);
    const tracking = await courier.trackShipment(order.awbNumber);
    await prisma.trackingHistory.create({
    data: {
    orderId: order.id,
    status: tracking.status,
    rawPayload: tracking,
    },
    });
    return tracking;
    };
    exports.cancelOrder = async (orderId) => {
    const order = await repository.findByOrderId(orderId);
    const courier = CourierFactory.getCourier(order.courierPartner);
    await courier.cancelShipment(order.courierOrderId);
    return repository.updateOrder(order.id, {
        shipmentStatus: 'CANCELLED',
    });
};        