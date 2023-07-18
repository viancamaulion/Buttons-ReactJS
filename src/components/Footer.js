//footer links
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <p>Closet & Things by Via Co., Manila, Philippines February 2023 | Developer: Vianca Andrea Maulion</p> 
      <ul className='socials'>
        <li>
          <FontAwesomeIcon icon={faLinkedin}/><a href="https://www.linkedin.com/in/viancamaulion/"> Vianca Maulion  </a>
          <FontAwesomeIcon icon={faInstagramSquare}/><a href="https://www.instagram.com/viapilotservice/"> Via Pilot Service Inc.</a>
        </li>
      </ul>
    </footer>
  );


}

export default Footer;
