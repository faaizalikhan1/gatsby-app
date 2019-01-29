// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/home/user/Projects/surf/surfstatus/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-surfbreak-js": () => import("/home/user/Projects/surf/surfstatus/src/templates/surfbreak.js" /* webpackChunkName: "component---src-templates-surfbreak-js" */),
  "component---src-templates-blogs-js": () => import("/home/user/Projects/surf/surfstatus/src/templates/blogs.js" /* webpackChunkName: "component---src-templates-blogs-js" */),
  "component---src-templates-blog-post-js": () => import("/home/user/Projects/surf/surfstatus/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/home/user/Projects/surf/surfstatus/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/user/Projects/surf/surfstatus/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/user/Projects/surf/surfstatus/.cache/data.json")

