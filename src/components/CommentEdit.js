import React from 'react'
import { Container, Header, Divider, Form, Label, Input, TextArea, Button, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import agent from '../agent'
import { EDITOR_PAGE_LOADED, APP_LOAD } from '../constants/actionTypes'



const mapStateToProps = state => {
	return {
		...state,
		appLoaded: state.common.appLoaded,
		articles: state.common.articles
		
	}
}


const mapDispatchToState = dispatch => ({
	onUpdate: (comment) => (
		dispatch({type: 'COMMENT_UPDATE', comment})
	),
	onLoad: (payload, commentId) => (
		dispatch({type: EDITOR_PAGE_LOADED, payload, commentId})
	)
})


class CommentEdit extends React.Component {
	
	constructor(){
		super()


		this.updateComment = ev => {
			ev.preventDefault()


		}
	}






	componentWillMount() {

		if(!this.props.appLoaded) {
			
			this.props.onLoad(agent.Articles.all(), this.props.match.params.id)
			return
		}

		this.props.onLoad(this.props.articles, this.props.match.params.id)
		
	}
	

	render() {

		

		if (this.props.appLoaded && this.props.match.params.id) {

			const commentId = this.props.match.params.id

			let articleIdx
			let commentIdx

			this.props.articles.forEach((article, artIdx) => {
				article.comments.forEach((comment, commIdx) => {
					if (comment.id === commentId) {
						
						articleIdx = artIdx;
						commentIdx = commIdx;
					}
				})
			})

			const comment = this.props.articles[articleIdx].comments[commentIdx]
			

			return (
				<Container>
					<Divider hidden/>
						<Header as="h1">Edit Comment {comment.id} </Header>
					<Divider />
					<Form>
						<Form.Field>
							<Label>Commenter's name</Label>
							<Input placeholder="Commenter's name" 
									value={ comment.commenter.name } />
						</Form.Field>
						
						<Label >Comment</Label>
						<TextArea placeholder="Comment..." 
								  value={comment.text}/>
						
						<Divider hidden/>		
						<Button type="submit" onClick={this.updateComment}>
							Update
						</Button>
					</Form>
				</Container>
			)
		}

		return (
			<Dimmer active page>
				<Loader />
			</Dimmer>
		)
	}

}



export default connect(mapStateToProps, mapDispatchToState)(CommentEdit)

