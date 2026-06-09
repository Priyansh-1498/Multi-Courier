class CourierInterface {
    async createShipment(payload) {}
    async trackShipment(awb) {}
    async cancelShipment(orderId) {}
    }
    module.exports = CourierInterface;