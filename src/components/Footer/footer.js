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
           <br></br> <h1 class="font-footer">Follow Us AT</h1>
        <a href="https://twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="4x"  />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="4x"  />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/" className="linkedin social" >
        <FontAwesomeIcon icon={faLinkedin} size="4x"  />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.telegram.com/" className="telegram social" >
        <FontAwesomeIcon icon={faTelegram} size="4x"  />
      </a>
      
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="4x"  />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.medium.com/" className="medium social" >
        <FontAwesomeIcon icon={faMedium} size="4x"  />
      </a>
    
    </div>
      <div id="navbarBasicExample" class="navbar-menu" >
      <a href=" " target="_blank" rel="noopener noreferrer" className="navbar-item"> Home </a>
      <a href=" " target="_blank" rel="noopener noreferrer" className="navbar-item"> About Us</a>
      <a href=" " target="_blank" rel="noopener noreferrer" className="navbar-item">Contact Us</a>
      <a href=" " target="_blank" rel="noopener noreferrer" className="navbar-item">Blog</a>
      </div>
      <div className="HorizontalLine"></div>
      
    
    
    <div class="content has-text-centered">	
          <p class="footer-fon">  Made with <i class="heart"> <FaHeart color="#E10404" /></i>By Girlscript Banglore </p>

    </div>
        </div>
    </footer>
     
  );
}

export default Footer;
