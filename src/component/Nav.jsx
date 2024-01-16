import "../App.css";

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <img src="./brand_logo.png" alt="Nike_logo" />
            </div>
            <ul className="movr" right="0px" >
                <li><a href="/" className="btn btn-white">Home</a></li>
                <li><a href="/" className="btn btn-white">About</a></li>
                <li><a href="/" className="btn btn-white">Contact</a></li>
            </ul>
            <a href="/" className=" button rad btn-white ">Login</a>
        </nav>
    );
}

export default Nav;
