import React from "react";
import "./About.css";
import Me from "../../assets/cv2.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>7 to 8 Months Working</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="projects_icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am an aspiring front-end developer diving into the exciting world
            of web development. With a passion for crafting visually appealing
            and user-friendly interfaces, they are eager to learn, grow, and
            contribute their skills to create captivating digital experiences.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
