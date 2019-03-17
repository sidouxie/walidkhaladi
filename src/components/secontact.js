import React from "react"

const Secontact = () => (
    <section>
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
                <input type="hidden" name="form-name" value="contact" />
                    <span className="contact100-form-title">
                        Envoie-nous un message
                    </span>
                    <p className="txt4"><strong>POUR LES ENQUÊTES GÉNÉRALES</strong> - Veuillez utiliser le formulaire de contact ci-dessous.</p>

                    <label className="label-input100" for="first-name">Dites nous votre nom *</label>
                    <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                        <input id="first-name" className="input100" type="text" name="first-name" placeholder="Prénom" />
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                        <input className="input100" type="text" name="last-name" placeholder="Nom" />
                        <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" for="email">Entrer votre Email *</label>
                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input id="email" className="input100" type="text" name="email" placeholder="example@email.com" />
                        <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" for="phone">Entrer votre Numéro</label>
                    <div className="wrap-input100">
                        <input id="phone" className="input100" type="text" name="phone" placeholder="+1 800 000000" />
                        <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" for="message">Message *</label>
                    <div className="wrap-input100 validate-input" data-validate="Message is required">
                        <textarea id="message" className="input100" name="message" placeholder="Écrivez-nous un message"></textarea>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="field">
                        <div data-netlify-recaptcha="true"></div>
                    </div>

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" type="submit">
                        Envoyer
                        </button>
                    </div>
                </form>

                <div className="contact100-more flex-col-c-m" id="bg-contact">
				<div className="flex-w size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-map-marker"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
							Adresse Postale
						</span>

						<span className="txt2">
							61 Rue Saint-Honoré, Paris France 
						</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-phone-handset"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
                            Notre Numéro
						</span>

						<span className="txt3">
							+1 800 1236879
						</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-envelope"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
                            Support Général
						</span>

						<span className="txt3">
							contact@example.com
						</span>
					</div>
				</div>
			</div>
            </div>
        </div>

    <div id="dropDownSelect1"></div>
    </section>
)

export default Secontact