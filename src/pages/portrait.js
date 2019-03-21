import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortraitImages from "../components/imagesportrait"


const Portrait = () => (
    <Layout>
        <SEO title="Portrait" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel', 'portrait', 'model']}/>
        <div>
            <section className="animation-box">
                <h1 className="text-effect-right" style={{color:'teal'}}>Portrait</h1>
                <p className="text-effect" style={{padding: '0.5rem 2rem', marginBottom:'0'}}>&rdquo; La comédie n'est qu'un portrait de nos actions et de nos discours, et la perfection des portraits consiste en la ressemblance. &rdquo;</p>
                <figure className="text-effect" style={{fontWeight:'300',fontSize:'0.9rem'}}>Pierre Corneille</figure>
            </section>
        </div>
        <PortraitImages />
    </Layout>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Portrait
