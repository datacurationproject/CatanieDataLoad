#!/usr/bin/env bash
rsync -avz login:test/PyMetadataCreator/datasets.json src/datasets.json
yarn run ts-node src/DeleterOrig.ts
yarn run ts-node src/Deleter.ts
yarn run ts-node src/MetadataUploader.ts
