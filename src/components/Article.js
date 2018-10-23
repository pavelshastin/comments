import React from 'react'
import { Container, Dimmer, Loader, Header, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import  agent from '../agent'
import { Link } from 'react-router-dom'
import  Comments  from './Comments'
import { ARTICLE_PAGE_LOADED } from '../constants/actionTypes'

const mapStateToProps = state => {
	return {
		...state.article
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onLoad: (payload) => {
			dispatch({type: ARTICLE_PAGE_LOADED, payload})
		}
	}
}


class Article extends React.Component {

	componentWillMount() {
		const articleLoadPromise = agent.Articles.get(this.props.match.params.id) 
		
		this.props.onLoad(articleLoadPromise)
	}


	render() { 
		if (!this.props.article) {
			return(
				<Container  style={{minHeight: '600px'}}>
					<Dimmer active>
						<Loader size="large" />
					</Dimmer>
				</Container>
			)
		}

		if (this.props.article === "") {
			return(
				<Container  style={{minHeight: '600px'}}>
					<Header as="h2">No such article in store</Header> 
				</Container>
			)
		}

		const article = this.props.article

		return(
			<Container>
				<Divider />
				<Header as="h2">
					{ article.title}
				</Header>
				<Divider />
				<Link to={`/users/${article.author.id}/${article.author.name}`}>
					<Header as="h5">
						by { article.author.name}
					</Header>
				</Link>
				<Divider hidden/>
				<p>
					{ article.text }
				</p>
				<Divider hidden/>
				<Comments comments={ article.comments } />

			</Container>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Article)

