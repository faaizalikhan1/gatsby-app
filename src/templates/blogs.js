import React from 'react'
import Layout from '../components/layout'
import Blogs from '../components/blogs/blogs'

const BlogsPage = ({ pageContext: allposts }) => (
  <Layout>
  	<Blogs {...allposts}/>
  </Layout>
)

export default BlogsPage