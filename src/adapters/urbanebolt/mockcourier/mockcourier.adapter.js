class MockCourierAdapter {
    async createShipment(payload) {
    return {
    courierOrderId: 'MOCK123',
    awbNumber: 'MOCKAWB123',
    status: 'CREATED',
    raw: {},
    };
    }
    async trackShipment() {
    return {
    status: 'IN_TRANSIT',
    };
    }
    async cancelShipment() {
    return {
    success: true,
    };
    }
    }
    module.exports = MockCourierAdapter;