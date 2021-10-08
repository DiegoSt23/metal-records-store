import "../../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <h2>About</h2>
        <p>
          Hi! My name is Diego, the store has been made using HTML, pure CSS, a bit of Framer Motion for the animation on the product details, JavaScript and React. This is only a demo sorry, you can't buy nothing here but hey, 
          if you're interested in some of these bands you can find them in almost every music streaming platform. 
          And if you ever meet "him" remember to have some courtesy, have some sympathy and some taste (if you catch the reference). 
        </p>
        <p>
          If you want to check my portfolio you can click <a href="https://portfolio-diego-alvarez.vercel.app/#/" target="blank">here</a>.
        </p>
        <div className="languages-container">
          <FontAwesomeIcon icon={faHtml5}/>
          <FontAwesomeIcon icon={faCss3Alt}/>
          <FontAwesomeIcon icon={faJs}/>
          <FontAwesomeIcon icon={faReact}/>
        </div>
      </div>      
    </div>
  );
}

export default About;