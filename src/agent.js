//import _superagent from 'superagent';
//import superagentPromise from 'superagent-promise';
//const superagent = superagentPromise(_superagent, global.Promise);


//const API_ROOT = '/api';


const responseBody = res => res.body;


// const requests = {
// 	put: (url, body) =>
// 		 superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
// 	post:(url, body) =>
// 		 superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
// 	get: url =>
// 		 superagent.get(`${API_ROOT}${url}`).then(responseBody),
// 	del: url =>
// 		 superagent.del(`${API_ROOT}${url}`).then(responseBody),
// }



const requests = {
	put: (url, body) => {
			switch(url){

				case (url.match(/\/comments\/\d+/) || {}).input: {
					
					const articles = JSON.parse(window.localStorage.getItem('articles'))
					const comment_id = url.split("/")[2];

					articles.forEach((article, index) => {
						for(let key in article.comments) {
							if (article.comments[key].id === comment_id) articles[index].comments[key].text = body
						}
					})

					window.localStorage.setItem("articles", JSON.stringify(articles));
					
					const promise = new Promise((resolve, reject) => {

						setTimeout(()=> {
							resolve({body: {"success": true}})
						}, Math.random()*2000)
					
					}).then(responseBody)

					return promise;
				}

				case (url.match(/\/users\/\d+/) || {}).input: {
					
					const articles = JSON.parse(window.localStorage.getItem('articles'))
					const user_id = url.split("/")[2];

					articles.forEach((article, index) => {

						if (article.author.id === user_id) articles[index].author.name = body

						for(let key in article.comments) {
							if (article.comments[key].commenter.id === user_id) articles[index].comments[key].commenter.name = body
						}
					})


					window.localStorage.setItem("articles", JSON.stringify(articles));

					console.log(JSON.parse(window.localStorage.getItem("articles")));
					
					return new Promise((resolve, reject) => {

						setTimeout(()=> {
							resolve({body: {"success": true}})
						}, Math.random()*2000)
					
					}).then(responseBody)
				}

				default: {
					console.log("put default")
				}
			}



		},
		 
	post:(url, body) => {


		},
		 
	get: url => {
			switch(url) {
				case('/articles'): {
					
					const articles = JSON.parse(window.localStorage.getItem('articles'))
					
					
					 return new Promise((response, reject) => {
					 		
					 	setTimeout(()=>{
					 		response({body: articles})
					 	}, 2000)
					 
					 }).then(responseBody)
				}

				case (url.match(/\/articles\/\d+/) || {}).input: {
					
					const articles = JSON.parse(window.localStorage.getItem('articles'))
					const article_id = url.split("/")[2];

					let articleBody = "No such article" //if article matches the id in the further forEach-cycle the variable will be reassigned

					articles.forEach(article => {
						
						if (parseInt(article.id, 10) === article_id) {
							
							articleBody = article
						} 
					})

						return new Promise((resolve, reject) => {

							setTimeout(()=>{
								resolve({body: articleBody})
							}, 2000)

						}).then(responseBody) 

				}


				default: {
					console.log("default")
				}
			}

		},

	del: url => {

	}
		 
}





const Articles = {
	all: () => requests.get('/articles'),
	get: id => requests.get(`/articles/${id}`),
}

const Users = {
	edit: (id, name) => requests.put(`/users/${id}`, name)
}

const Comments = {
	edit: (id, text) => requests.put(`/comments/${id}`, text)
}

export default {
	Articles,
	Users,
	Comments
}