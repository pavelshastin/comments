import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ArticleList = (props) => {
	
		return (
			<div>
			
				{
					props.articles.map((article) => {
						return (
							<Link to={`/articles/${ article.id }`}>
							<Card fluid>
								<Card.Content>
									<Card.Header>
										{article.title}
									</Card.Header>
									
									<Link to={`/users/${ article.author.id }/${ article.author.name }`}>
										<Card.Meta as="a">
											{article.author.name}
										</Card.Meta>
									</Link>
									
									<Card.Description floated="left">
										{article.text}
									</Card.Description>

									<span style={{float: 'right'}}>
										<Link to={`/articles/${article.id}/#comments`}>
											<Card.Meta as="a">
												<Icon  name="comments" size="large"/>
											</Card.Meta>
										</Link>
									</span>
									
								</Card.Content>
							</Card>
							</Link>
						);
					})
				}
			
			</div>
		)
	

}

export default ArticleList
