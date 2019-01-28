import React from 'react'
import Layout from '../components/layout'
import Blog from '../components/blogs/blog'
import { graphql } from 'gatsby'

const BlogPostsPage = ({ pageContext: post, data }) => (
  <Layout>
  	<Blog {...data} />
  </Layout>
)

export default BlogPostsPage

export const pageQuery = graphql`
    query pageQuery($id: String) {
		  contentfulBlogPost(id:{eq:$id}) {
		        id
		        slug
		        title
		        publishDate
						description {
						  description
						}
		        body {
		          body
		        }
		        author {
		          title
		          phone
		          company
		        }
		        heroImage {
		          sizes {
		            src
		            srcWebp
		          }
		          description
		          file {
		            url
		            fileName
		            contentType
		          }
		        }
		    }
		
    }`