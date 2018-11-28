#!/usr/bin/env bash
if [ "$(hostname)" == "CI0020036" ]; then
	ssh compile04 "cd metadatacreator  &&  ./scripts/get_metadata.sh"
	rsync -avz login:metadatacreator/publish.json src/datasets.json
fi
if [ "$(hostname)" == "macmurphy.local" ]; then
#ssh login "cd test/PyMetadataCreator  && ./generate_metadata.sh"
	rsync -avz login:metadatacreator/publish.json src/datasets.json
fi
if [ "$(hostname)" == "kubetest01.dm.esss.dk" ]; then
	rsync -avz ssh0:publish.json src/datasets.json
fi
#cp ~/test/PyMetadataCreator/test_new_metadata.json src/datasets.json
yarn run ts-node src/DeleterOrig.ts
yarn run ts-node src/DeleterPublisher.ts
yarn run ts-node src/Deleter.ts
yarn run ts-node src/MetadataUploader.ts
