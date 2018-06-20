#!/usr/bin/env bash
if [ "$(hostname)" == "CI0020036" ]; then
	rsync -avz login:test/PyMetadataCreator/datasets.json src/datasets.json
fi
yarn run ts-node src/DeleterOrig.ts
yarn run ts-node src/Deleter.ts
yarn run ts-node src/MetadataUploader.ts
