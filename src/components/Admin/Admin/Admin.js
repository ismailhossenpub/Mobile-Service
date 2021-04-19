import React, { useState } from "react";
import AdminSidebar from "../../Share/AdminSidebar/AdminSidebar";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Admin = () => {
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 d-flex justify-content-center"></div>
      </div>
    </section>
  );
};

export default Admin;
