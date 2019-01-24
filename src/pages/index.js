import React from 'react'
/*import { Link } from 'gatsby'
import Image from '../components/image'*/
import Layout from '../components/layout'
import SEO from '../components/seo'
import SufBreaks from '../components/surfbreaks/surfbreaks'

const IndexPage = ({ pageContext: { surfstatus } }) => (
  <Layout>
    <SEO title="Surf Report" keywords={[`surfstatus`, `wheather conditions`, `beaches`]} />
    <SufBreaks/>
  </Layout>
)

export default IndexPage
