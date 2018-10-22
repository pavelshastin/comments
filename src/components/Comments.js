import React from 'react'
import {Segment, Comment} from 'semantic-ui-react'




const Comments = (props) => {

	

	return(
		<Segment raised style={{minHeight: '600px'}}>
			
			<Comment.Group size="massive">	
				<Comment>
					
					<Comment.Content>
						<Comment.Author>
							Author Name
						</Comment.Author>
						<Comment.Text>
							Comment Text
						</Comment.Text>
					
					
					<Comment.Actions>
						<Comment.Action>
							DELETE
						</Comment.Action>
						<Comment.Action>
							EDIT
						</Comment.Action>
					</Comment.Actions>

					</Comment.Content>	
				</Comment>


				<Comment>
					
					<Comment.Content>
						<Comment.Author>
							Author Name
						</Comment.Author>
						<Comment.Text>
							Comment Text
						</Comment.Text>
					
					
					<Comment.Actions>
						<Comment.Action>
							DELETE
						</Comment.Action>
						<Comment.Action>
							EDIT
						</Comment.Action>
					</Comment.Actions>

					</Comment.Content>	
				</Comment>

			</Comment.Group>	
				
		</Segment>


	)

}


export default Comments