import React from 'react'
import { Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const Comments = (props) => {
	

	return(
		
		<Comment.Group size="big" id="comments">

			{ props.comments.map(comment => {

				const author = (props.location !== 'user') ? comment.commenter.name: null
				
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
								<Link to={`/comment/${comment.id}/${comment.commenter.name}`}>
									<Comment.Action>
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


export default Comments