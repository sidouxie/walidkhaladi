import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Secontact from "../components/secontact"


const Contact = () => (
        <Layout>
            <SEO title="Contact" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel', 'contact', 'joindre', 'message']}/>
            <div>
                <section className="animation-box">
                    <h1 className="text-effect" style={{color:'teal'}}>Contact</h1>
                </section>
            </div>
            <Secontact></Secontact>
        </Layout>
)
export default Contact
