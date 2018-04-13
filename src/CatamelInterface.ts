
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import { AccessT} from './AccessToken';

class CatamelInterface{
    url: string;


    constructor(){
        url_pick.set('local', 'localhost:3000')
        url_pick.set('dm', 'kubetest02.dm.esss.dk:32222')
        url_pick.set('ess', 'scicat02.esss.lu.se:32222')
        url_pick.set('dst', 'scicatapi.esss.dk')

        const local_url  = 'localhost:3000';
        const dm_url  = 'kubetest02.dm.esss.dk:32222';
        const ess_url = 'scicat02.esss.lu.se:32222';
        const dst_url  = 'scicatapi.esss.dk';
        this.url = 'https://'+dm_url+'/api/v2/' + api_descriptor + '?access_token=' + access_token;
        console.log(url);
    }

    send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
        const xhr = new XMLHttpRequest();
        const token = new AccessT();
        const access_token = token.access_token;
        let url_pick = new Map<string, string>();




        function reqListener () {
  console.log(this.responseText);
}
	xhr.addEventListener('load', reqListener);


        xhr.open('POST', this.url, true);
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

        };
        return xhr;
    }

}


export { CatamelInterface};
