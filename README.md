# CatanieDataLoad

[![Greenkeeper badge](https://badges.greenkeeper.io/datacurationproject/CatanieDataLoad.svg)](https://greenkeeper.io/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e9c631a50f8c4018925d0aaedbb38d30)](https://www.codacy.com/app/garethcmurphy/CatanieDataLoad?utm_source=github.com&utm_medium=referral&utm_content=datacurationproject/CatanieDataLoad&utm_campaign=badger)
[![Build Status](https://travis-ci.org/datacurationproject/CatanieDataLoad.svg?branch=master)](https://travis-ci.org/datacurationproject/CatanieDataLoad)
[![Coverage Status](https://coveralls.io/repos/github/datacurationproject/CatanieDataLoad/badge.svg?branch=master)](https://coveralls.io/github/datacurationproject/CatanieDataLoad?branch=master)
[![DOI](https://zenodo.org/badge/103987354.svg)](https://zenodo.org/badge/latestdoi/103987354)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdatacurationproject%2FCatanieDataLoad.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdatacurationproject%2FCatanieDataLoad?ref=badge_shield)


This repository contains classes to load synthetic metadata to the scicat data catalogue, for testing and benchmarking purposes.


## Getting Started


The easiest way to build is to use Docker, which will install the node modules.
```
docker build . -t dataloader
```

### Prerequisites

Docker (17.09.0-ce)

Node (tested in v7,8,9)

Typescript (v2.6)

SciCat



### Installing


Install packages
```
yarn install
```

```
node ./src/DatasetLoader.js
```
```
yarn ts-node ./src/DatasetLoader.ts
```


## Running the tests

Tests use mocha

You can try running 
```
yarn test
```

Tests should run automatically on travis-ci.org



## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Docker](http://hub.docker.com/) - The container setup used
* [Travis](https://travis-ci.org/) - The CI framework

## Contributing

Please read [CONTRIBUTING.md](https://github.com/datacurationproject/CatanieDataLoad/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/datacurationproject/CatanieDataLoad/tags). 

## Authors

* **Gareth Murphy** - *Initial work* - [garethcmurphy](https://github.com/garethcmurphy)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the BSD 2 Clause License - see the [LICENSE](LICENSE) file for details


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdatacurationproject%2FCatanieDataLoad.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdatacurationproject%2FCatanieDataLoad?ref=badge_large)

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
