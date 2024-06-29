import './header.css';
import logo from '../Icons/logo.png';
import notification from '../Icons/bell.png';
import userImage from '../Icons/user.png';

function Header() {
    
    return (
       <div className='header'>
            <div className="left-section">
                <div className="left-section">
                    <img className="logo" src={logo} />
                    <div className  ="menu">Dashboard</div>
                    <div className="menu">Daily Journals</div>
                    <div className="menu">Settings</div>
                    <div className="menu">Trade Reports</div>
                </div>
            </div>
            <button><img className="notification-bell" src={notification} /></button>
            <button><img className="user-profile" src={userImage} /></button>
       </div> 
    )
}
export default Header;