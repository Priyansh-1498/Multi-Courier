const axios = require('axios');
class UrbaneBoltAdapter {
constructor() {
this.token = null;
}
async authenticate() {
const response = await axios.post(
`${process.env.URBANEBOLT_BASE_URL}/auth/login`,
{
apiKey: process.env.URBANEBOLT_API_KEY,
}
);
this.token = response.data.token;
}
async createShipment(payload) {
if (!this.token) {
await this.authenticate();
}
const response = await axios.post(
`${process.env.URBANEBOLT_BASE_URL}/orders/create`,
{
customer_name: payload.customer.name,
phone: payload.customer.phone,
amount: payload.amount,
},
{
headers: {
    Authorization: `Bearer ${this.token}`,
},
}
);
return {
courierOrderId: response.data.order_id,
awbNumber: response.data.awb,
status: 'CREATED',
raw: response.data,
};
}
async trackShipment(awb) {
const response = await axios.get(
`${process.env.URBANEBOLT_BASE_URL}/track/${awb}`,
{
headers: {
Authorization: `Bearer ${this.token}`,
},
}
);
return response.data;
}
async cancelShipment(orderId) {
const response = await axios.post(
`${process.env.URBANEBOLT_BASE_URL}/cancel`,
{
orderId,
},
{
headers: {
Authorization: `Bearer ${this.token}`,
},
}
);
return response.data;
}
}
module.exports = UrbaneBoltAdapter;