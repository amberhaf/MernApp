import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
<section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="text-center mt-4">
                    <p>Maynooth University Women In STEM Society focuses on celebrating and empowering Women in Science, Technology, Engineering and Maths (STEM) related subjects in Maynooth University. We host and promote many events throughout the Semester such as panel discussions from companies, chill nights and more. We also have mentorship programs, career talks and many more opportunities for networking.</p>
                    <p>We are open to hear and include diverse underrepresented groups such as POC (people of colour), the LGBTQ+ community, and women as a whole in our activities. To strive to encourage a wider and more diverse group of individuals to engage in and pursue STEM activities. As well become more confident about engagement in STEM activities.</p>
                </div>
            </div>
        </section>
  );
};

export default About;
