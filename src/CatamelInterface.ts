
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import { AccessT} from './AccessToken';

class CatamelInterface{

    send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
        const xhr = new XMLHttpRequest();
        const token = new AccessT();
        const access_token = token.access_token;

		const dm_url = 'kubetest02.dm.esss.dk:32094'
		const ess_url = 'scicat02.esss.lu.se:32361'
        const url = 'http://'+ess_url+'/api/v2/' + api_descriptor + '?access_token=' + access_token;
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        // send the collected data as JSON
        xhr.send(JSON.stringify(obj));


        xhr.onloadend = function () {
            console.log('DONE', xhr.readyState);
            console.log('xhr.status=', xhr.status);
            console.log('response=', xhr.responseText);
        };

        if (xhr.readyState == 4 || xhr.status == 200) {
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
        }
        return xhr;
    }

}


export { CatamelInterface};
