import NaviagationBar from "@/components/NavBar/NaviagationBar";
import React from "react";
import { ParticlesDemo } from "../animations/ParticlesDemo";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className="p-2 overflow-hidden">
      <NaviagationBar />
      {props.children}
      {/* <ParticlesDemo /> */}
      <Footer />
    </div>
  );
};

export default Layout;
