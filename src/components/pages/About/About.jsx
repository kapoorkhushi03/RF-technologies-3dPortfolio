import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Tech enthusiast"
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
        I'm a passionate tech enthusiast with a knack for innovative solutions.
         As a frontend developer, I craft engaging user experiences using HTML, 
         CSS, JavaScript, and React.js. Currently, I'm diving into the world of 
         machine learning, eager to harness its potential for future projects.
        </p>{" "}
        <br />
        <p>
        I thrive on learning new technologies and applying them creatively. My goal 
        is to continuously improve and contribute to the ever-evolving tech landscape.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
