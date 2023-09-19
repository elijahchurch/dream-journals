import {Link} from "react-router-dom";

function Header() {
    return (
        <div id="Header">
            <h1 id="Title">Dream Journals</h1>
            <button className="headerButtons">
                {/* Button text will change to sign out if you sign in */}
                <Link className="headerLinks" to="/signUp">Sign Up</Link>
            </button>
            <button className="headerButtons">
                <Link className="headerLinks" to="/">Home</Link>
            </button>            
        </div>
    )
}

export default Header