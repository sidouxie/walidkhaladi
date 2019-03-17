import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="error-container">
      <span className="four"><span className="screen-reader-text">4</span></span>
      <span className="zero"><span className="screen-reader-text">0</span></span>
      <span className="four"><span className="screen-reader-text">4</span></span>
    </section>
    <h1 style={{marginTop:'1em'}}>Page not found</h1>
      <p style={{fontSize:'0.8em', padding:'1em 2em'}}><b>Nous sommes désolés.</b> La page que vous avez demandée n'a pas pu être trouvée. Veuillez retourner à la page d'accueil ou contactez-nous.</p>
    <div className="container-contact100-form-btn">
      <Link to='/'><button className="contact100-form-btn">Page d'Accueil</button></Link>
    </div>
  </Layout>
)

export default NotFoundPage
