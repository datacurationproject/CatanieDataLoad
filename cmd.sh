#!/usr/bin/env bash
rsync -avz login:test/PyMetadataCreator/datasets.json src/datasets.json
yarn run ts-node src/delorig.ts
yarn run ts-node src/del.ts
yarn run ts-node src/gen.ts
