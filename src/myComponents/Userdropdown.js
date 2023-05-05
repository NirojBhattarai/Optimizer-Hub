import "../myComponents/userprofiledropdown.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

function Userdropdown() {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      {!localStorage.getItem("token") ? (
        <form className="d-flex authbutton" role="search">
          <Link className="btn btn-success mx-1" to="/login" role="submit">
            Login
          </Link>
          <Link className="btn btn-success mx-1" to="/signup" role="submit">
            SignUp
          </Link>
        </form>
      ) : (
        <form className="d-flex authbutton" role="search">
        <Link onClick={handleLogout} className="btn btn-success buttonlogout">
          Logout
        </Link>
        </form>
      )}
    </div>
  );
}

export default Userdropdown;
