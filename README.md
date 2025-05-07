# node-pnpm-microservices

# sample service folder structure:

product-service/
├── src/
│   ├── app.ts                     # Express/Fastify app config
│   ├── server.ts                  # Server bootstrap
│   ├── config/
│   │   ├── index.ts               # Load env/config
│   │   └── db.ts                  # DB connection
│   ├── controllers/
│   │   └── product.controller.ts  # Request handlers
│   ├── routes/
│   │   └── product.routes.ts      # Route definitions
│   ├── services/
│   │   └── product.service.ts     # Business logic
│   ├── repositories/
│   │   └── product.repository.ts  # DB access methods
│   ├── models/
│   │   └── product.model.ts       # DB schema (Mongoose/Prisma/TypeORM)
│   ├── validations/
│   │   └── product.schema.ts      # Zod/Joi validation
│   ├── middlewares/
│   │   ├── error.middleware.ts    # Central error handler
│   │   └── auth.middleware.ts     # Auth check middleware
│   ├── events/
│   │   ├── index.ts               # Event bus client
│   │   └── product-created.event.ts  # Event publishers/listeners
│   ├── jobs/
│   │   └── sync-inventory.job.ts  # Background jobs if any
│   ├── utils/
│   │   └── logger.ts              # Winston or Pino logger
│   └── types/
│       └── index.d.ts             # Custom TS types and interfaces
├── tests/
│   ├── unit/
│   │   └── product.service.test.ts
│   └── integration/
│       └── product.routes.test.ts
├── .env
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
├── package.json
├── README.md
└── swagger.yaml                  # Optional: OpenAPI documentation



common/
├── src/
│   ├── auth/
│   │   └── current-user.ts          # Middleware to extract user from JWT
│   ├── errors/
│   │   ├── custom-error.ts          # Base class
│   │   ├── bad-request-error.ts
│   │   ├── not-authorized-error.ts
│   │   ├── not-found-error.ts
│   │   └── request-validation-error.ts
│   ├── middlewares/
│   │   ├── error-handler.ts         # Centralized error middleware
│   │   ├── validate-request.ts      # Wrapper for Zod/Joi validation
│   ├── logger/
│   │   └── logger.ts                # Winston or Pino logger setup
│   ├── events/
│   │   ├── base-event.ts            # Event base class
│   │   ├── base-listener.ts
│   │   └── base-publisher.ts
│   ├── types/
│   │   └── custom.d.ts              # Shared interfaces
│   └── index.ts                     # Barrel exports
├── README.md
├── tsconfig.json
└── project.json


docker-compose down --volumes --remove-orphans
docker system prune -f
docker-compose build --no-cache
docker-compose up
