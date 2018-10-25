import React from 'react'
import { Container, Dimmer, Loader, Header, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
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

	const userId = props.match.params.id

	
	const comments = []
	
	 props.articles.forEach(article => {
			article.comments.forEach(comment => {
				if (comment.commenter.id === userId) {
					comments.push(comment)
				}
			})
	})

	
	return (
		<Container>
			<Divider />
			<Header as="h1">{props.match.params.name}</Header>
			<Divider />
			<Comments   comments={comments} 
						location={ props.match }			/>
		</Container>
	)

}



export default connect(mapStateToProps)(User)

