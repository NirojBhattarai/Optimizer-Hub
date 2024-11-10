import { Link, useNavigate } from "react-router-dom";

function Userdropdown() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex items-center">
      {!localStorage.getItem("token") ? (
        <div className="flex space-x-2 authbutton">
          <Link
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
            to="/signup"
          >
            SignUp
          </Link>
        </div>
      ) : (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 ml-20"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Userdropdown;
