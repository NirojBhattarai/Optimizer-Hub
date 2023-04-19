import Dropdown from "react-bootstrap/Dropdown";
import "../myComponents/userprofiledropdown.css";
import "bootstrap/dist/css/bootstrap.css";
import avatar from './img/avatar.webp'


function Userdropdown() {
  return (
    <Dropdown className="userprofiledropdown">
      
      <Dropdown.Toggle variant="none" id="dropdown-basic" className="profile">
      <img src={avatar} alt="Profile" className="profile_img"/>
        <span className='profile-name'>User Profile</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Userdropdown;
