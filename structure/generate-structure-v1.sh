#!/bin/bash

# Accept resource name from the first argument
RESOURCE=${1:-resource}  # Default to "resource" if not provided
ROOT="${RESOURCE}s"

# Create directory structure
mkdir -p $ROOT/src/{config,controllers,routes,services,repositories,models,validations,middlewares,events,jobs,utils,types}
# mkdir -p $ROOT/tests/{unit,integration}

# Create files with dynamic resource name
touch $ROOT/src/app.ts
touch $ROOT/src/server.ts
touch $ROOT/src/config/index.ts
touch $ROOT/src/config/db.ts
touch $ROOT/src/controllers/${RESOURCE}.controller.ts
touch $ROOT/src/routes/${RESOURCE}.routes.ts
touch $ROOT/src/services/${RESOURCE}.service.ts
touch $ROOT/src/repositories/${RESOURCE}.repository.ts
touch $ROOT/src/models/${RESOURCE}.model.ts
touch $ROOT/src/validations/${RESOURCE}.schema.ts
touch $ROOT/src/middlewares/error.middleware.ts
touch $ROOT/src/middlewares/auth.middleware.ts
touch $ROOT/src/events/index.ts
touch $ROOT/src/events/${RESOURCE}-created.event.ts
touch $ROOT/src/jobs/sync-inventory.job.ts
touch $ROOT/src/utils/logger.ts
touch $ROOT/src/types/index.d.ts
# touch $ROOT/tests/unit/${RESOURCE}.service.test.ts
# touch $ROOT/tests/integration/${RESOURCE}.routes.test.ts
# touch $ROOT/.env
# touch $ROOT/.env.example
# touch $ROOT/Dockerfile
# touch $ROOT/docker-compose.yml
# touch $ROOT/tsconfig.json
# touch $ROOT/package.json
# touch $ROOT/README.md
# touch $ROOT/swagger.yaml

echo "Folder structure created under '$ROOT'"

# Run the script with the resource name as an argument
# ./generate-structure.sh user