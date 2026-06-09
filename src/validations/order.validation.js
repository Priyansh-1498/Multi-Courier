const Joi = require('joi');
exports.createOrderSchema = Joi.object({
orderId: Joi.string().required(),
courierPartner: Joi.string().required(),
customer: Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    }).required(),
    amount: Joi.number().required(),
    });