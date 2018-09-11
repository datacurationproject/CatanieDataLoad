"use strict";
import * as datasets from "./datasets.json";
import { PublishedData } from "./CatamelClasses";

const datacite_authentication = require("/tmp/generic_config.json");

class RegisterDOI {
  get_first(fullName) {
    const firstName = fullName
      .split(" ")
      .slice(0, -1)
      .join(" ");
    return firstName;
  }

  get_last(fullName) {
    const lastName = fullName
      .split(" ")
      .slice(-1)
      .join(" ");
    return lastName;
  }

  async register_doi() {
    for (let key in datasets) {
      if (datasets.hasOwnProperty(key)) {
        const published: PublishedData = datasets[key]["published"];
        console.log(key + " -> " + published.doi);

        const first_name = this.get_first(published.creator);
        const last_name = this.get_last(published.creator);
        const affiliation = published.affiliation;
        const publisher = published.publisher;
        const publication_year = published.publicationYear;
        const title = published.title;
        const technical_info = published.title;
        const abstract = published.abstract;
        const doi = published.doi;
        const resource_type = published.resourceType;
        const url =
          "https://doi.esss.se/detail/" + encodeURIComponent(encodeURIComponent(doi));

        const xml = `<?xml version="1.0" encoding="UTF-8"?> \
<resource xmlns="http://datacite.org/schema/kernel-4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://datacite.org/schema/kernel-4 http://schema.datacite.org/meta/kernel-4/metadata.xsd">  \
  <identifier identifierType=\"DOI\">${doi}</identifier>  \
  <creators> \
    <creator> \
      <creatorName>${last_name}, ${first_name}</creatorName>  \
      <givenName>${first_name}</givenName>  \
      <familyName>${last_name}</familyName>\  
      <affiliation>${affiliation}</affiliation> \
    </creator> \
  </creators>  \
  <titles> \
    <title>${title} </title> \
  </titles>  \
  <publisher>${publisher}</publisher>  \
  <publicationYear>${publication_year}</publicationYear>  \
  <descriptions>  \
    <description xml:lang="en-us" descriptionType="TechnicalInfo">${technical_info}</description>  \
    <description xml:lang="en-us" descriptionType="Abstract">${abstract}</description> \
  </descriptions>  \
  <resourceType resourceTypeGeneral="Text">${resource_type}</resourceType> \
</resource>`;

        const register_plain_text = `#Content-Type:text/plain;charset=UTF-8
doi= ${doi}
url= ${url}`;

        const datacite_register_metadata =
          "https://mds.datacite.org/metadata" + "/" + doi;
        const datacite_register_doi = "https://mds.datacite.org/doi" + "/" + doi;

        console.log(register_plain_text);
        let options_put = {
          url: datacite_register_metadata,
          method: "PUT",
          body: xml,
          rejectUnauthorized: false,
          requestCert: true
        };


        const options_register_put = {
          method: "PUT",
          body: register_plain_text,
          uri: datacite_register_doi,
          headers: {
            "content-type": "text/plain;charset=UTF-8"
          },
          auth: datacite_authentication
        };



        /*
        try {
          const response = await rp(options5);
          Promise.resolve(response);
        } catch (error) {
          console.log(url_orig);
          console.log(error);
          return Promise.reject(error);
        }
        */
        console.log(options5);
      }
    }

    return datasets;
  }

  async main() {
    this.register_doi();
  }
}

let met = new RegisterDOI();
met.main();
