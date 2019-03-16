import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fashimg from "../components/fashimg";


const Fashion = () => (
        <Layout>
            <SEO title="Fashion" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel', 'fashion', 'mode', 'modeles']}/>
            <div>
            <section className="animation-box">
                    <h1 className="text-effect-right" style={{color:'teal'}}>Fashion</h1>
                    <p className="text-effect" style={{padding: '0.5rem 2rem', marginBottom:'0'}}>&rdquo; La mode passe, le style reste. &rdquo;</p>
                    <figure className="text-effect" style={{fontWeight:'300',fontSize:'0.9rem'}}>Yves Saint-Laurent</figure>
                </section>
            </div>
            <Fashimg></Fashimg>
        </Layout>
)
export default Fashion
