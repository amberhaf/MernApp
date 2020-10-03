import React from "react";
import { NavLink } from "react-router-dom";

const Details = props => {
  const { title, description } =
    (props.location && props.location.state) || {};
  return (
  <div>
    <section className="page-section bg-primary mb-0" id="steps">
      <div className="form-details text-center mt-4">
        <div>
          <strong>Title:</strong> {title}
        </div>
        <div>
          <strong>Description:</strong> {description}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Details;
