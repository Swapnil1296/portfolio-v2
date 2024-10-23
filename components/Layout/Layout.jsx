import NaviagationBar from "@/components/NavBar/NaviagationBar";
import React from "react";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className="p-2 overflow-hidden">
      <NaviagationBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
