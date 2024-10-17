//import logo from "../assets/logo1.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const sidebarOptions = [
    { title: "home", src: "/" },
    { title: "about", src: "/about" },
  ];
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <Link to="/">
          <h3> home</h3>
        </Link>

        <Link to="/about">
          <h3>about</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

//https://medium.com/@adewaleabiola78/creating-a-responsive-sidebar-using-reactjs-e01b4ec2cbd2
