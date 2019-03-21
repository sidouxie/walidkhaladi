import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/imagesnature"


const Nature = () => (
        <Layout>
            <SEO title="Nature" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel', 'Naturel', 'Nature', 'modeles']}/>
            <div>
            <section className="animation-box">
                    <h1 className="text-effect-right" style={{color:'teal'}}>Nature</h1>
                    <p className="text-effect" style={{padding: '0.5rem 2rem', marginBottom:'0'}}>&rdquo; Ce qui reste éternellement incompréhensible dans la nature, c'est qu'on puisse la comprendre. &rdquo;</p>
                    <figure className="text-effect" style={{fontWeight:'300',fontSize:'0.9rem'}}>Albert Einstein</figure>
                </section>
            </div>
            <Images />
        </Layout>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Nature
