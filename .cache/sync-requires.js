const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/home/user/Projects/surf/surfstatus/src/pages/index.js"))),
  "component---src-templates-surfbreak-js": hot(preferDefault(require("/home/user/Projects/surf/surfstatus/src/templates/surfbreak.js"))),
  "component---src-templates-blogs-js": hot(preferDefault(require("/home/user/Projects/surf/surfstatus/src/templates/blogs.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/user/Projects/surf/surfstatus/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/user/Projects/surf/surfstatus/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/user/Projects/surf/surfstatus/src/pages/404.js")))
}

