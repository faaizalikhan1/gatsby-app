import React, { Component } from 'react'
import { Card, CardHeader, Avatar } from '@material-ui/core'
import { navigate } from "gatsby"
import moment from 'moment'

class Blogs extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  	const { allposts } = this.props
    return (
      <div id="blogs">
        {
          allposts.map((post, i) => {
            return(
              <Card className="card__section" key={i} onClick={()=> navigate(`/blog/${post.node.slug}`)}>
              	<CardHeader
		          avatar={
		            <Avatar aria-label="Recipe" style={{backgroundColor: 'red'}}>
		              {post.node.title.charAt(0)}
		            </Avatar>
		          }
		          title={post.node.title}
		          subheader={moment(post.node.publishDate).format('LLL')}
		        />
              	<img alt={post.node.title} src={`https:${post.node.heroImage.sizes.src}`} />
              </Card>
            )
          })
        }
      </div>
    )
  }
}

export default Blogs