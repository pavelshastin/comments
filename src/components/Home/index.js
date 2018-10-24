import React from 'react'
import MainView from './Mainview'
import { Grid, Container } from 'semantic-ui-react'


const Home = (props) => {
	
		return(
			<Container >
			<Grid >
				<Grid.Column>
				<Grid>
					<Grid.Row columns={3}>
						<Grid.Column width={13}>
							<MainView />
						</Grid.Column>

						<Grid.Column width={3}>
							
						</Grid.Column>
					</Grid.Row>	
				</Grid>
				</Grid.Column>
			</Grid>	
			</Container>	

			
		)
	
}

export default Home