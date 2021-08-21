
import { Link } from "react-router-dom";
import './css/style.css';


const Header = ()=>{
    return (
        <div>
            <header id="header">
            <div className="navbar navbar-fixed-top menu">
                <div className="container">

                <Link className="navbar-header">
                    <Link className="navbar-brand" to="/dashboard">dotConnect</Link>
                </Link>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right main-menu">
                    <li className="dropdown"><Link to="/dashboard">Home</Link></li>
                    {/* @if (Session::get('user_type')=='individual') */}
                   
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Timeline <span></span></Link>
                        <ul className="dropdown-menu login">
                        <li><Link to="timeline.html">Timeline</Link></li>
                        <li><Link to="timeline-about.html">Timeline About</Link></li>
                        <li><Link to="timeline-album.html">Timeline Album</Link></li>
                        <li><Link to="timeline-friends.html">Timeline Friends</Link></li>
                        </ul>
                    </li>
                    {/* @endif
                    @if (Session::get('user_type')=='admin') */}
                        <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">Admin Settings <span></span></Link>
                        <ul className="dropdown-menu login">
                            
                            
                            <li><Link to="/notice">Notice</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                        </ul>
                        </li>
                        
                        <li><Link to="/users">Users List</Link></li>
                        <li><Link to="/restrictedWordList">Resticted Words</Link></li>
                        <li><Link to="/countryList">Country List</Link></li>
                        <li><Link to="/adminList">Admins List</Link></li>
                        {
                            localStorage.getItem("userData")?"":

                            <li className="dropdown"><Link to="/login">Login</Link></li>
                        }
                        
                    {/* @endif
                    @if (Session::has('logged_in')) */}
                        <li className="dropdown"><Link to="/logout">Logout</Link></li>
                    {/* @endif */}
                    
                    </ul>
                </div>
                </div>
            </div>
            </header>

        </div>

    );
}


export default Header