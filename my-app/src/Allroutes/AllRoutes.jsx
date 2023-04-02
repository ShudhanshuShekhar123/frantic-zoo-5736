import {Routes,Route} from "react-router-dom"
import Homepage from "../Pages/Homepage"
import Motorcycle from "../Pages/Motorcycle"
import Mobilephone from "../Pages/Mobilephone"
import Car from "../Pages/Car"
import Productdetails from "../components/Productdetails"
const AllRoutes=()=>{

    return(
        <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/motorcycle" element={<Motorcycle />} />
       <Route path="/mobilephone" element={<Mobilephone />} />
       <Route path="/car" element={<Car />} />
       
        
        <Route path= {`/:category/:id`} element={<Productdetails />} /> 
        
       
      

        </Routes>

    )
}

export default AllRoutes