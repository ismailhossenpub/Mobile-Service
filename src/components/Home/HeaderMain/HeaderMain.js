import React from "react";
import chair from "../../../images/mobileBg.jpg";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your Are Welcome <br /> Our Service Center
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          doloribus eaque, molestias quam natus praesentium.
        </p>
        <button
          style={{ backgroundColor: "#13D1D2", color: "white" }}
          className="btn "
        >
          GET SERVICES
        </button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
