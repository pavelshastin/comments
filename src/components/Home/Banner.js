import React from 'react'
import {Grid, Container, Header} from 'semantic-ui-react'




const Banner = () => {

	return (
		<Container >
			<Grid style={{minHeight: '200px'}}>
				<Grid.Row Columns={1} verticalAlign="middle" textAlign="center">
					<Grid.Column width={16}>
						<Header as="h1" 
								style={{color: 'white', fontSize: '4rem'}}>
							Comment's Eraser
						</Header>
						<Header as="h2" 
								style={{color: 'white'}}>
							A place to edit their's comments
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>

	)


}



export default Banner