import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
    faTelegram,
    faMedium,
    
  } from "@fortawesome/free-brands-svg-icons";
  import { FaHeart  } from 'react-icons/fa';



function Footer() {
  return (
  
<footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
            <h1 class="font-footer">Follow Us AT</h1><br></br>
        <a href="https://twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="5x"  />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="5x"  />
      </a>
      <a
        href="https://www.linkedin.com/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="5x"  />
      </a>
      <a
        href="https://www.telegram.com/"
        className="telegram social"
      >
        <FontAwesomeIcon icon={faTelegram} size="5x"  />
      </a>
      
      <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="5x"  />
      </a>
      <a
        href="https://www.medium.com/"
        className="medium social"
      >
        <FontAwesomeIcon icon={faMedium} size="5x"  />
      </a>
    
    </div>
    <div class="content">
      <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a href=" " className="navbar-item">
          Home
        </a>

        <a href=" " className="navbar-item">
         About Us
        </a>
        <a href=" " className="navbar-item">
          Contact Us
        </a>

        <a href=" " className="navbar-item">
          Blog
        </a>
        </div>
      </div>
      <div className="HorizontalLine"></div>
    </div>
    
    <div class="content has-text-centered">	
          <p class="footer-fon">  Made with  
         <i class="heart"> <FaHeart color="#E10404" /></i> 
         By Girlscript Banglore
          </p>

    </div>
        </div>
    </footer>
     
  );
}

export default Footer;