import React from "react";
import Footer from "../parts/Footer";
import Navbar from "../parts/Navbar";
import Details from "../parts/Details";

const News = () => {
  return (
    <>
      <Navbar />
      <section className="page-section bg-primary text-white mb-0" id="steps">
      <div>
        <h3 className="text-center mt-4">No content so far</h3>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default News;
