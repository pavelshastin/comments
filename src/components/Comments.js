import React from 'react'
import { Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { REDIRECT } from '../constants/actionTypes'



const mapDispatchToProps = dispatch => ({
	onLink: (location) => (
		dispatch({type: REDIRECT, location})
	)
})



const Comments = (props) => {

	
	const onEditClick = () => {
		props.onLink(props.location.url)
	}
	
	
	return(
		
		<Comment.Group size="big" id="comments">

			{props.comments.map(comment => {
				
				const author = (props.location.path.indexOf('/users')) ? comment.commenter.name: null
				
				return (
					<Comment id={comment.id}>
						<Comment.Content>
							<Link to={`/users/${comment.commenter.id}/${comment.commenter.name}`}>
								<Comment.Author>
									{author}
								</Comment.Author>
							</Link>
							
							<Comment.Text>
								{comment.text}
							</Comment.Text>
						
							<Comment.Actions>
								<Link to={`/comment/${comment.id}`} >
									<Comment.Action onClick={onEditClick}>
										EDIT
									</Comment.Action>
								</Link>	
							</Comment.Actions>

						</Comment.Content>	
					</Comment>
				)

			})}

		</Comment.Group>	
				
	)

}


export default connect(()=>({}), mapDispatchToProps)(Comments)