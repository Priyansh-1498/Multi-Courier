const UrbaneBoltAdapter = require('../adapters/urbanebolt/urbanebolt.adapter');
    const MockCourierAdapter = require('../adapters/mockcourier/mockcourier.adapter');
    const urbanebolt = new UrbaneBoltAdapter();
    const mockcourier = new MockCourierAdapter();
    class CourierFactory {
    static getCourier(partner) {
    switch (partner.toLowerCase()) {
    case 'urbanebolt':
    return urbanebolt;
    case 'mockcourier':
        return mockcourier;
        default:
        throw new Error('Unsupported courier partner');
        }
        }
        }
        module.exports = CourierFactory;
            