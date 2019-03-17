import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import mailsvg from "../images/mail-sent.svg"

export default () => (
    <Layout>
        <SEO title="Thanks You" keywords={[`walidkhalladi`, `photographe`, `alger`, 'portfolio', 'website', 'professionnel', 'Merci', 'Thanks']}/>
  <div className="animation-box">
    <h1 className="text-effect-right" style={{color:'teal', marginTop:'1em'}}>Thank you!</h1>
    <div className="container-svg text-effect-delay">
      <img src={mailsvg} alt="Icon mail send"></img>
    </div>
    <p className="text-effect" style={{fontSize:'0.8em', padding:'1em 2em'}}>Votre soumission est reçue et nous vous contacterons bientôt</p>
  </div>
  </Layout>
);