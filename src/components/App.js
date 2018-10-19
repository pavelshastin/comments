import React from 'react';
import {connect} from 'react-redux';
import Header from '/components/Header';
import Articles from '/components/Articles'
import {Switch, Route} from 'react-router-dom';



const mapStateToProps = state => {
	return {
		appLoaded: state.appLoaded,
		appName: state.appName
	}
}

const mapDispatchToProps = state => {
	return {

	}
}


class App extends React.Component {


render() {
	if (this.props.appLoaded) {
	return (
		<Header 
			appName={this.props.appName} />

			<Switch>
				<Route exact path="/" component={Articles} />
				<Route exact path="/articles" component={Articles} />
			</Switch>
		)
	}

	return (
		<Header  />
	)

}

}


export default connect(mapStateToProps, mapDispatchToProps)(App)





