import React from 'react';
import {connect} from 'react-redux';
import PageHeader from './Header';
import Home from './Home';
import Article from './Article'
import User from './User'
import { Switch, Route } from 'react-router-dom';
import { APP_LOAD } from '../constants/actionTypes'
import agent from '../agent'

const mapStateToProps = state => {
	return {
		appLoaded: state.common.appLoaded,
	}
}

const mapDispatchToProps = dispatch => {
	return {
	onLoad: (payload) =>
   		 dispatch({ type: APP_LOAD, payload}),
	}
}


class App extends React.Component {



	componentWillMount() {
		const articles = agent.Articles.all();

		this.props.onLoad(articles)
	}



	render() {
		if (this.props.appLoaded) {
		return (
			<div>
			<PageHeader 
				appName={this.props.appName} />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/articles/:id" component={Article} />
					<Route path="/users/:id" component={User} />
				</Switch>
			</div>
			)
		}

		return (
			<div>
				<PageHeader  />
			</div>
		)

}

}


export default connect(mapStateToProps, mapDispatchToProps)(App)





