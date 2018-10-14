import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent, global.Promise);


const API_ROOT = '/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;


const requests = {
	put: req =>
		 superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
	post: req =>
		 superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
	get: req =>
		 superagent.get(`${API_ROOT}${url}`).then(responseBody),
	del: req =>
		 superagent.del(`${API_ROOT}${url}`).then(responseBody),
}

