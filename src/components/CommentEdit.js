import React from 'react'
import { Container, Header, Divider, Form, Label, Input, TextArea, Button, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import agent from '../agent'
import { EDITOR_PAGE_LOADED, 
		 COMMENT_SUBMITTED,
		 UPDATE_FIELD_EDITOR 

		} from '../constants/actionTypes'

const promise = global.Promise


const mapStateToProps = state => {
	return {
		...state,
		...state.editor,
		appLoaded: state.common.appLoaded,
		articles: state.common.articles,
	}
}


const mapDispatchToProps = dispatch => ({
	onCommentSubmit: (payload, commenter, comment) => (
		dispatch({type: COMMENT_SUBMITTED, payload, commenter, comment})
	),
	onLoad: (payload, commentId) => (
		dispatch({type: EDITOR_PAGE_LOADED, payload, commentId})
	),
	onUpdateField: (key, value) => (
		dispatch({type: UPDATE_FIELD_EDITOR, key, value})
	)
})


class CommentEdit extends React.Component {
	
	constructor(){
		super()


		const updateFieldEvent =
      		key => ev => this.props.onUpdateField(key, ev.target.value);
    
	    this.changeComment = updateFieldEvent('commentText');
	    this.changeCommenter = updateFieldEvent('commenterName');
	 


		this.onSubmit = ev => {
			ev.preventDefault()

			const commenterId = this.props.commenterId
			const commenterName = this.props.commenterName
			const commentId = this.props.commentId
			const commentText = this.props.commentText
			

			if(this.props.commenterChange && this.props.commentChange) {
				
				const comment = agent.Comment.edit(commentId, commentText)
				const commenter = agent.User.edit(commenterId, commenterName)
				
				this.props.onCommentSubmit(promise.all([comment, commenter]), true, true)
				
			} else if (!this.props.commenterChange && this.props.commentChange) {

				const comment = agent.Comment.edit(commentId, commentText)
				
				this.props.onCommentSubmit(comment, false, true)	

			} else if (this.props.commenterChange && !this.props.commentChange) {

				const commenter = agent.User.edit(commenterId, commenterName)
				
				this.props.onCommentSubmit(commenter, true, false)

			} else if (!this.props.commenterChange && !this.props.commentChange) {

				this.props.history.push(this.props.redirectTo)
			}
			
			
			
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



		if (this.props.appLoaded && !this.props.inProgress) {

			return (
				<Container >
					<Divider hidden/>
						<Header as="h1">Edit Comment {this.props.commentId} </Header>
					<Divider />
					<Form>
						<Form.Field>
							<Label>Commenter's name</Label>
							<Input placeholder="Commenter's name" 
									value={ this.props.commenterName } 
									onChange={this.changeCommenter} />
						</Form.Field>
						
						<Label >Comment</Label>
						<TextArea placeholder="Comment..." 
								  value={ this.props.commentText }
								  onChange={this.changeComment} />
						
						<Divider hidden/>		
						<Button type="submit" onClick={this.onSubmit}>
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



export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit)

