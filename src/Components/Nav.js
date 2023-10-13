import { Link } from "react-router-dom";
function Nav() {
  const imgstyle = { height: "50px", width: "80px" };
  const navnamestyle = { textDecoration: "none" };
  return (
    <nav class="navbar bg-dark">
      <div className="navbar-brand">
        {" "}
        <img
          class="ms-5 rounded "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuFxzZ7OWqs0dwaaKG8ig-in_u2ppDoxINA&usqp=CAU"
          alt="logo"
          style={imgstyle}
        />
        <Link to="/" class="text-light p-3" style={navnamestyle}>
          Dhruv Gandhi
        </Link>
      </div>

      <div class="nav mx-4">
        {/* /home goes to the path which is defined on App.js page */}
        <Link to="/home" class="nav-link text-light">
          Home
        </Link>
        <Link to="/educate" class="nav-link text-light">
          Education and Skills
        </Link>
        <Link to="/project" class="nav-link text-light">
          Projects
        </Link>
        <Link to="/contact" class="nav-link text-light">
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
