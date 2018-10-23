import React from 'react'
import { Container, Dimmer, Loader, Header, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  Comments  from './Comments'


const mapStateToProps = state => {
	return {
		...state,
		appLoaded: state.common.appLoaded,
		articles: state.common.articles
	}
}


const User = props => {

	if (!props.appLoaded) {
		return(
			<Container  style={{minHeight: '600px'}}>
				<Dimmer active>
					<Loader size="large" />
				</Dimmer>
			</Container>
		) 
	}

	const userId = parseInt(props.match.params.id, 10)

	

	
	const comments = props.articles.map(article => {
			return article.comments.forEach(comment => parseInt(comment.commenter.id, 10) === userId ? comment: null)
	})

	console.dir(comments)

	return (
		<Container>
			<Divider />
			<Header as="h1">{props.match.params.name}</Header>
			<Divider />
			<Comments comments={comments} />
		</Container>
	)

}



export default connect(mapStateToProps)(User)

