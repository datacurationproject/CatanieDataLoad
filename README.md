# CatanieDataLoad

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e9c631a50f8c4018925d0aaedbb38d30)](https://www.codacy.com/app/garethcmurphy/CatanieDataLoad?utm_source=github.com&utm_medium=referral&utm_content=datacurationproject/CatanieDataLoad&utm_campaign=badger)
[![Build Status](https://travis-ci.org/datacurationproject/CatanieDataLoad.svg?branch=master)](https://travis-ci.org/datacurationproject/CatanieDataLoad)
[![Coverage Status](https://coveralls.io/repos/github/datacurationproject/CatanieDataLoad/badge.svg?branch=master)](https://coveralls.io/github/datacurationproject/CatanieDataLoad?branch=master)

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
npm install
```

```
node ./src/DatasetLoader.js
```
```
ts-node ./src/DatasetLoader.ts
```


## Running the tests

Tests use mocha

You can try running 
```
npm test
```

Tests should run automatically on travis-ci.org

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://github.com/datacurationproject/CatanieDataLoad/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/datacurationproject/CatanieDataLoad/tags). 

## Authors

* **Gareth Murphy** - *Initial work* - [garethcmurphy](https://github.com/garethcmurphy)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GPL-3 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

