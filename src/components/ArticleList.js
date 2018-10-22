import React from 'react'
import {Segment, Card, Icon} from 'semantic-ui-react'


const ArticleList = (props) => {
	
	
		return (
			<Segment raised style={{minHeight: '600px'}}>
				<Card fluid>
					
					<Card.Content>
						<span style={{float: 'right'}}>
							<Icon name="thumbs up outline" size="large"/>
						</span>
						
						<Card.Header as="a">Article Title</Card.Header>
						<Card.Meta as="a">Author name</Card.Meta>

						
						<Card.Description floated="left">Article Preview</Card.Description>

						<span style={{float: 'right'}}>
							<Icon  name="comments" size="large"/>
						</span>
						
					</Card.Content>
				</Card>
			</Segment>

		)
	

}

export default ArticleList
