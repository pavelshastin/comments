import React from 'react'
import ReactDOM from 'react-dom'
import PageHeader from './components/Header'


class App extends React.Component {
	render() {
		return (
			<PageHeader />
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