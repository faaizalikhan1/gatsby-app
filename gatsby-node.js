const Promise = require('bluebird')
const path = require('path')
const surfbreaks = require('./src/data/surfbreaks.json')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/surfbreak.js'),
    context: { surfbreaks }
  });

  surfbreaks.map((surfbreak) => {
    createPage({
      path: `/surfbreaks/${surfbreak.title.trim()}`,
      component: path.resolve(`./src/templates/surfbreak.js`),
      context: { surfbreak }
    })
  })

  return new Promise((resolve, reject) => {
    const blogs = path.resolve('./src/templates/blogs.js')
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
        {
          allContentfulBlogPost {
            edges {
              node {
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
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const allposts = result.data.allContentfulBlogPost.edges
        createPage({
          path: `/blogs`,
          component: blogs,
          context: { allposts }
        })
        allposts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              post: post.node.id
            },
          })
        })
      })
    )
  })

/*  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              post: post.node.id
            },
          })
        })
      })
    )
  })*/

  
}