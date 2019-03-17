import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
    <Layout>
        <SEO title="Thanks You" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel', 'Merci', 'Thanks']}/>
  <div className="animation-box">
    <h1 className="text-effect-right" style={{color:'teal', marginTop:'1em'}}>Thank you!</h1>
    <p className="text-effect" style={{fontSize:'0.8em', padding:'1em 2em'}}>This is a custom thank you page for form submissions</p>
  </div>
  </Layout>
);