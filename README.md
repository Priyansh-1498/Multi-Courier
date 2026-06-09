# Multi-Courier

Multi-Courier/
├── package.json
├── .env
├── server.js
├── README.md
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── app.js
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── redis.js
│   │   └── swagger.js
│   │
│   ├── controllers/
│   │   ├── orders.controller.js
│   │   └── bulk.controller.js
│   │
│   ├── routes/
│   │   └── orders.routes.js
│   │
│   ├── services/
│   │   ├── orders.service.js
│   │   └── bulk.service.js
│   │
│   ├── repositories/
│   │   └── orders.repository.js
│   │
│   ├── adapters/
│   │   ├── courier.interface.js
│   │   │
│   │   ├── urbanebolt/
│   │   │   └── urbanebolt.adapter.js
│   │   │
│   │   └── mockcourier/
│   │       └── mockcourier.adapter.js
│   │
│   ├── factory/
│   │   └── courier.factory.js
│   │
│   ├── workers/
│   │   └── order.worker.js
│   │
│   ├── queues/
│   │   └── orders.queue.js
│   │
│   ├── middlewares/
│   │   ├── error.middleware.js
│   │   └── validation.middleware.js
│   │
│   ├── validations/
│   │   └── order.validation.js
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   └── constants.js
│   │
│   └── docs/
│       └── swagger.yaml
