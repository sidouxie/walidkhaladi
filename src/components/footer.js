import React from "react"
import facebook from "../images/facebook-icon.svg"
import twitter from "../images/twitter-icon.svg"
import instagram from "../images/instagram-icon.svg"


const Footer = () => (
    <footer>
        <h3 className="follow">Suivez-moi</h3>
        <ul className="footer-social">
            <li className="footer-social__item "><a href="https://www.facebook.com/walid5420" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Icon facebook"></img></a></li>
            <li className="footer-social__item"><a href="https://twitter.com/SidouXie" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Icon twitter"></img></a></li>
            <li className="footer-social__item"><a href="https://www.instagram.com/walid_khaladi/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Icon instagram"></img></a></li>
        </ul>
        <div className="ligne"></div>
        <p className="copyright">
            Copyright © {new Date().getFullYear()} Walid Khaladi.
            <br/>
            Designed & Coded by Sidouxie. All rights reserved.
        </p>
    </footer>
)

export default Footer