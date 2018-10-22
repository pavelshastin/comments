import React from 'react'
import Banner from './Banner'
import MainView from './Mainview'
import { Grid, Container } from 'semantic-ui-react'




const Home = (props) => (
	<Grid >
		
		<Grid.Row columns={1} color='green'>
			<Grid.Column>
				<Banner />
			</Grid.Column>
		</Grid.Row>	

	<Container >
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
	</Container>	

	</Grid>
)

export default Home