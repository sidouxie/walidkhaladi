import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Apropo from "../components/apropo"


const About = () => (
        <Layout>
            <SEO title="À Propos" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel', 'apropos', 'about', 'cv']}/>
            <div>
                <section className="animation-box">
                    <h1 className="text-effect" style={{color:'teal'}}>À Propos</h1>
                </section>
            </div>
            <Apropo></Apropo>
        </Layout>
)
export default About