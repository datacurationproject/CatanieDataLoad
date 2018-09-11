#!/usr/bin/env bash
if [ "$(hostname)" == "CI0020036" ]; then
#ssh login "cd test/PyMetadataCreator  && ./generate_metadata.sh"
	rsync -avz login:test/PyMetadataCreator/test_new_metadata.json src/datasets.json
fi
#cp ~/test/PyMetadataCreator/test_new_metadata.json src/datasets.json
yarn run ts-node src/DeleterOrig.ts
yarn run ts-node src/Deleter.ts
yarn run ts-node src/MetadataUploader.ts
