
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import { AccessT} from './AccessToken';

class CatamelInterface{

    send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
        const xhr = new XMLHttpRequest();
        const token = new AccessT();
        const access_token = token.access_token;



function reqListener () {
  console.log(this.responseText);
}
	xhr.addEventListener("load", reqListener);
	    const local_url  = 'localhost:3000'
	    const dm_url  = 'kubetest02.dm.esss.dk:32222'
      	const ess_url = 'scicat02.esss.lu.se:32222'
        const url = 'http://'+dm_url+'/api/v2/' + api_descriptor + '?access_token=' + access_token;
	console.log(url)

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        // send the collected data as JSON
		const catamel_obj=JSON.stringify(obj);
        xhr.send(catamel_obj);
		console.log(url);
		console.log(catamel_obj);


        xhr.onload = function () {
            console.log('DONE', xhr.readyState);
            console.log('xhr.status=', xhr.status);
            console.log('response=', xhr.responseText);
        };

	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 &&  xhr.status === 200) {
            console.log('xhr.readyState=', xhr.readyState);
            console.log('xhr.status=', xhr.status);
            console.log('response=', xhr.responseText);

            let data = JSON.parse(xhr.responseText);
            let uploadResult = data['message'];
            console.log('uploadResult=', uploadResult);
            if (uploadResult == 'failure') {
                console.log('failed to upload file');
            } else if (uploadResult == 'success') {
                console.log('successfully uploaded file');
            }
};

        }
        return xhr;
    }

}


export { CatamelInterface};
