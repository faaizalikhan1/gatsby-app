import React, { Component } from 'react'
/*import { Card, CardHeader, Avatar } from '@material-ui/core'
import { navigate } from "gatsby"
import moment from 'moment'*/

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  	const { contentfulBlogPost } = this.props
    console.log('blog =========>>> ', contentfulBlogPost)
    return (
      <div id="blog">
        <h1>{contentfulBlogPost.title}</h1>
        <img alt={contentfulBlogPost.title} src={`https:${contentfulBlogPost.heroImage.sizes.src}`} />
        <p>{contentfulBlogPost.description.description}</p>
      </div>
    )
  }
}

export default Blog