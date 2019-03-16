import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Conimg from "../components/conimg";



const IndexPage = () => (
    <Layout>
      <SEO title="Accueil" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel']} />
      <Conimg></Conimg>
    </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage
