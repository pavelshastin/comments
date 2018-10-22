import React from 'react'
import {List, Header, Grid, Container } from 'semantic-ui-react'





const LoggedOutView = (props) => {
		if (!props.userName) {
			return (
				<List link horizontal floated='right'>
					<List.Item as='a' active style={{fontSize: '16px'}}>
						Home
					</List.Item>
					<List.Item as='a' style={{fontSize: '16px'}}>
						LogIn
					</List.Item>
					<List.Item as='a' style={{fontSize: '16px'}}>
						SignUp
					</List.Item>
				</List>
			)
		}
		return null
	}


class PageHeader extends React.Component {
	
	render() {
		return(
		
		<Container>	
		<Grid columns={2} verticalAlign='middle' style={{minHeight: '100px' }}>
			
				
				<Grid.Column width={2} floated='left' verticalAlign='middle'>
					
					<Header size='large' verticalAlign='middle'>Comment's Eraser</Header>
				</Grid.Column>

				<Grid.Column width={6} floated='right'>
					
					<LoggedOutView userName={false}/>
				</Grid.Column>
			
		</Grid>
		</Container>
		)

	}
}


export default PageHeader