import "../styles/productpage.css"
import { Link } from "react-router-dom"
const Productpage = ({ id, image, price, location, category, uploadeddate, description }) => {
    
      console.log(category)

    return (
        <Link to={`/${category}/${id}`} style={{ textDecoration: "none", color: "black" }}>
            <div className="productcomponent">
                <img src={image} alt={id} />
                <h3>Rs.{price}</h3>
                <p>{description}</p>
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", opacity: "0.6" }}>
                    <span>{location}</span>
                    <span>{uploadeddate}</span>
                </div>
            </div>
        </Link>

    )

}
export default Productpage