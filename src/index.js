import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Container } from 'semantic-ui-react'

const Header = () => (
	<div style={ {backgroundColor: 'red', minHeight: '30px'}} textAlign='center'>Header</div>

)


const Banner = () => (

	<div style={{backgroundColor: 'green', minHeight: '300px'}} textAlign='center'>Banner</div>
)


const MainView = () => (

	<div style={{backgroundColor: 'yellow', minHeight: '600px'}} textAlign='center'>MainView</div>
)


const Tags = () => (

	<div style={{backgroundColor: 'blue', minHeight: '300px'}} textAlign='center'>Tags</div>
)


const InitGrid = () => (
	<Grid >
	<Container>
		<Grid.Row columns={1}>
			<Grid.Column>
				<Header />
			</Grid.Column>
		</Grid.Row>		
	</Container>
	
		<Grid.Row columns={1}>
			<Grid.Column>
				<Banner />
			</Grid.Column>
		</Grid.Row>	

	<Container >
		<Grid.Column>
		<Grid>
			<Grid.Row columns={3}>
				<Grid.Column width={3}>
					<Tags />
				</Grid.Column>

				<Grid.Column width={10}>
					<MainView />
				</Grid.Column>

				<Grid.Column width={3}>
					<Tags />
				</Grid.Column>
			</Grid.Row>	
		</Grid>
		</Grid.Column>	
	</Container>	

	</Grid>
)



class App extends React.Component {

render() {
	return (
		<InitGrid />
	)
}

}


ReactDOM.render(<App/>, document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Router, Switch, Route} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
// import App from '/components/App';

// const history = createHistory();


// ReactDOM.render(<Provider store="store">
// 	<Router history={history}>
// 		<Switch>
// 			<Route path="/" component={App}/>
// 		</Switch>		
// 	</Router>
// </Provider>, document.getElementById('root'))