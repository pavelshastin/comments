import React from 'react'
import { Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const Comments = (props) => {

	return(
		
		<Comment.Group size="big">

			{ props.comments.map(comment => {
				return (
					<Comment id={comment.id}>
						<Comment.Content>
							<Link to={`/users/${comment.commenter.id}`}>
								<Comment.Author>
									{comment.commenter.name}
								</Comment.Author>
							</Link>
							
							<Comment.Text>
								{comment.text}
							</Comment.Text>
						
							<Comment.Actions>
								<Link to={`/comment/${comment.id}`}>
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