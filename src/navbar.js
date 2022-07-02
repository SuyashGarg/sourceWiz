import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import logo from './images/logo.png'
import './navbar.scss';

function Navbar () {
    return (
        <div className="navbar fixed-top navbar-light">
            <img className='brand' src={logo} alt="" srcset="" />
            <div className="person"><PersonOutlineOutlinedIcon className="personIcon"></PersonOutlineOutlinedIcon></div>
        </div>
    )
};

export default Navbar;