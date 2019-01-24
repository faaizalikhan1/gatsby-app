import React from 'react'
import Layout from '../components/layout'

const SurfbraksPage = ({ pageContext: surfbreaks }) => (
  <Layout>
  	<h1>title: {surfbreaks.surfbreak.title}</h1>
  	<h3>shore: {surfbreaks.surfbreak.shore}</h3>
  	<h5>magicSW: {surfbreaks.surfbreak.magicSW}</h5>
  </Layout>
)

export default SurfbraksPage