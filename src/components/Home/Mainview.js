import React from 'react'
import ArticleList from '../ArticleList'
import Comments from '../Comments'
import {Tab} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {TAB_CHANGE} from '../../constants/actionTypes'

const mapStateToProps = state => {
	return {
		...state,
		appLoaded: state.common.appLoaded,
		articles: state.common.articles, 
		activeTabIndex: state.common.activeTabIndex
	}
} 


const mapDispatchToProps = dispatch => ({
	onTabChange: (index) => (dispatch({type: TAB_CHANGE, index}))
})



const MainView = (props) => {
	
	let tabMenu = [];

	const onTabChange = (ev, data) => {
		ev.preventDefault()

		props.onTabChange(data.activeIndex)
	}


	if (props.appLoaded) {
		let comments = []

		props.articles.map(article => {
				article.comments.map(comment => {
					comments.push({
						id: comment.id,
						text: comment.text, 
						commenter: comment.commenter,
						article: {
							id: article.id,
							title: article.title
						}
					})
				})
			})

		comments.sort((a,b) => (b.id - a.id))

		tabMenu = [
			{ menuItem: "Articles", render: () => (<Tab.Pane >
														<ArticleList articles={ props.articles } />
													</Tab.Pane>)},

			{ menuItem: "Comments", render: () => (<Tab.Pane>
														<Comments  comments={ comments } 
																	location={ {url: '/',  path: '/'} }/>
													</Tab.Pane>)}
		]
	} else {
		tabMenu = [
			{ menuItem: "Articles", render: () => (<Tab.Pane loading><div></div></Tab.Pane>)},
			{ menuItem: "Comments", render: () => (<Tab.Pane loading><div></div></Tab.Pane>)}
		]
	}

	return (
		<div>
			<Tab panes={tabMenu} 
				onTabChange={ onTabChange }
				activeIndex={ props.activeTabIndex }
				style={{minHeight: '400px'}}/>
		</div>
	)



}


export default connect(mapStateToProps, mapDispatchToProps)(MainView)