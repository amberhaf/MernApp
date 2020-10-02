import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../parts/Footer";
import Navbar from "../parts/Navbar";
import Details from "../parts/Details";

const Steps = props => {
  const { title, description } =
    (props.location && props.location.state) || {};
  return (
    <div>
      <Navbar/>
    <section className="page-section bg-primary text-white mb-0" id="steps">
      <div className="form-details text-center mt-4">
        <div>
          <strong>Title:</strong> {title}
        </div>
        <div>
          <strong>Description:</strong> {description}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Steps;
