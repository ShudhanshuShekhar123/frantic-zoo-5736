import "../styles/homepage.css"
import Productpage from "../components/Productpage"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
// import Pagination from "../components/Pagination"



const Homepage = () => {
    const [data, setData] = useState([])
   const [loading,setloading] = useState(false)
   const [page,setPage] = useState(1)
    const fetchAndUpdateData = (page) => {

        fetch(`http://localhost:8080/homedata?_limit=11&_page=${page}`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                setData(data)
                setloading(false)
                console.log(data)
            }).catch((error)=>{
                setloading(true)
                console.log(error)
            })
    }

    useEffect(() => {
        setloading(true)
        fetchAndUpdateData(page)
    }, [page])

    const handlesetpage=(val)=>{
        setPage(page + val)
    }
    const handlepage1=()=>{
        handlesetpage(-1)
    }
    const handlepage2=()=>{
        handlesetpage(+1)
    }

 if(loading){
    return <h1>Loading...Please be Patient</h1>
 }

    return (
        <div>
            <div>
                <img width="87%" height="100px" src="https://statics.olx.in/olxin/banners/hero_bg_in_v4@1x.png" alt="ad" />
            </div>
            <div></div>
            <div className="homepageproduct">
                {
                    data.map((item) => {
                        return <Productpage key={item.id} {...item} />
                    })
                }
            </div>
           {/* <Pagination page={page} handlepage1={handlesetpage} /> */}
            <button style={{cursor:"pointer", border:"transparent",backgroundColor:"teal",color:"white",outline:"none", padding:"6px 18px",marginTop:"14px",fontWeight:"600",fontSize:"15px"}} disabled={page===1} onClick={handlepage1}>Prev</button>
            <button style={{ border:"transparent",padding:"6px 10px",marginTop:"14px",fontWeight:"600",fontSize:"15px"}}>{page}</button>
            <button style={{cursor:"pointer", border:"transparent", backgroundColor:"teal",color:"white",outline:"none",padding:"6px 18px",marginTop:"14px",fontWeight:"600",fontSize:"15px"}} disabled={page===4} onClick={handlepage2}>Next</button>
            <div className="footer" >
                <div className="innerfooter1" >
                    <div>
                        <img src="https://statics.olx.in/external/base/img/phone-app.png" alt="" />
                    </div>
                    <div>
                        <h1>TRY THE OLX APP</h1>
                        <p style={{fontSize:"20px"}}>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>
                </div>
                <hr />
                <div className="innerfooter2" >
                    <div>
                    <p>GET YOUR APP TODAY</p>
                    </div>
                    <div  className="innerfooter2img">
                        <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="" />
                        <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="" />
                    </div>
                </div>
            </div>
           
        <Footer />
        </div>
    )

}



export default Homepage