import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="me.jpg" 
            alt="Bhakti Dave"
            loading="lazy"
            width="400"
            height="400"
          />
        </div>
        
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I am pursuing my B.S. in Computer Science at University of California, Irvine with a specialization in Intelligent Systems.
              Software engineering sounded really cool to pursue in middle school and I picked up coding later in high school. Over the years, 
              I have become proficient in Python, C++, and JavaScript, using them to build projects ranging from intelligent algorithms 
              to interactive web applications. I am passionate about combining creativity and technical skill, whether that is developing AI-powered tools, 
              optimizing backend systems, or crafting seamless user experiences. Always looking forward to making meaningful connections and working on 
              innovative projects, contact me to discuss such fun opportunties!
            </p>
            <p>
              When I'm not debugging code, I'm debugging my willpower at the gym or running queries on the best food spots in town :P.
              I love creating and appreciating art in all forms, especially stunning websites with great content writing and journalism 
              (<a href='https://www.theswaddle.com/' target='_blank' className='fav-web'>Shoutout to The Swaddle</a>). 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;