import React from 'react'
import {List, Header, Grid, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Banner from './Home/Banner'



const LoggedOutView = (props) => {
		if (!props.userName) {
			return (
				<List link horizontal floated='right'>
					<Link to="/">
						<List.Item as='a' style={{fontSize: '16px'}}>
							Home
						</List.Item>
					</Link>
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
		<div>
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

			
			<Grid>
				<Grid.Row columns={1} color='green'>
					<Grid.Column>
						<Banner />
					</Grid.Column>
				</Grid.Row>
			</Grid>	
		</div>
		)

	}
}


export default PageHeader