import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/images"



const IndexPage = () => (
    <Layout>
      <SEO title="Accueil" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel']} />
        
        <div>
          <section className="animation-box">
            <h1 className="text-effect-right" style={{color:'teal'}}>Bienvenue</h1>
            <p className="text-effect" style={{padding: '0.5rem 2rem', marginBottom:'0'}}>Soyez les bienvenues sur mon site fraichement conçu pour poster mes dernières photos</p>
            <figure className="text-effect" style={{fontWeight:'300',fontSize:'0.9rem'}}>Do What You Love...</figure>
          </section>
        </div>

      <Images />
    </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage
