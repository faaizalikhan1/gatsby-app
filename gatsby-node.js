
const path = require('path')
const surfbreaks = require('./src/data/surfbreaks.json')

exports.createPages = ({ actions }) => {
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
}