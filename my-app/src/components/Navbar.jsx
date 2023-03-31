import "../styles/navbar.css"
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
// CiSearch
// FaSearch
const Navbar = () => {


    return (
        <div>
            <div className="navbar" >
                <Link to="/">
                    <img id="logo3" src="./logo3.png" alt="" />
                </Link>
                <div className="selectcountry1">
                    <CiSearch />
                    <input id="selectcountry" type="text" placeholder="India" />
                </div>
                <div className="selectproduct1" >
                    <input id="selectproduct" type="text" placeholder="Find Cars,Mobile Phones and more" />
                    <FaSearch />
                </div>
                <div id="login">
                    <p>Login</p>
                </div>
            </div>
            {/* //second div fro categories */}
            <div className="categoriesdiv">
                <Link style={{ textDecoration: "none" }} to="/car"><p>Cars</p></Link>
                <Link style={{ textDecoration: "none" }} to="/motorcycle"><p>Motorcycles</p></Link>
                <Link style={{ textDecoration: "none" }} to="/mobilephone"><p>Mobile Phones</p></Link>
                <Link style={{ textDecoration: "none" }} to="/"><p>Scooters</p></Link>
                <Link style={{ textDecoration: "none" }} to="/"><p>Commerical & Other Vechiles</p></Link>

            </div>
        </div>
    )

}
export default Navbar