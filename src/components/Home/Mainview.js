import React from 'react'
import ArticleList from '../ArticleList'
import Comments from '../Comments'
//import {Segment, Card, Icon, Tab} from 'semantic-ui-react'



const MainView = (props) => {


	return (
		<div>
			<ArticleList />
			<Comments />
		</div>
	)



}


export default MainView