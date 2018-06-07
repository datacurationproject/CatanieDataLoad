import * as data from '/tmp/config.json';
import * as assert from 'assert';
import * as datasets from './datasets.json';

const rp = require('request-promise') ;


function login_url(){
	return "https://scicatapi.esss.dk/api/v2/Users/login"
}

function datasets_url(){
	return "https://scicatapi.esss.dk/api/v2/Datasets"
}

function make_url(temp_url, access_token){
	return temp_url+'?access_token='+access_token;
}

async function login(){

    let url = login_url();
	let rawdata = data;
	console.log(data);

    let options1 = {
            url: url,
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
    };
    try {
      const response = await rp(options1);
      return Promise.resolve(response);
    }
    catch (error) {
      return Promise.reject(error);
    }

}

function get_datasets(response){
    const access = response.id;
    console.log(access);
	assert ( access.length == 64);
	let dataset_url= datasets_url();
	let url= "https://scicatapi.esss.dk/api/v2/Datasets?access_token="+access;
	console.log(url);


    for (let key in datasets) {
        if (datasets.hasOwnProperty(key)) {
            console.log(key + " -> " + datasets[key].pid);


            let options3 = {
                url: url,
                method: 'POST',
                body: datasets[key],
                json: true,
                rejectUnauthorized: false,
                requestCert: true
            };
            rp(options3);
        }
    }





	return datasets;
}

async function main(){
    const x = await login();
    const y = await get_datasets(x);
    console.log(y);
}

main();
