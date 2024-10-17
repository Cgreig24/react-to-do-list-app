import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="logo" src={logo} />
      <h1 className="logoTagLine">Smash Through Your To Do List</h1>
    </div>
  );
};

export default Navbar;
