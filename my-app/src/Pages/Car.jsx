import Productpage from "../components/Productpage"
import { useState, useEffect } from "react"
import Footer from "../components/Footer"

// import "../styles/footer.css"
// import "../styles/homepage.css"
import "../styles/carsproductpage.css"
const Car = () => {

    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)
    const [filter, setfilter] = useState([])

    const fetchAndUpdateData = () => {

        fetch(`https://json-server-p4w8.onrender.com/carsdata`)
            .then((res) => {
                // console.log(res)
                return res.json()
            }).then((data) => {

                setData(data)
                setloading(false)
                console.log(data)
            }).catch((error) => {
                setloading(true)
            })
    }

    useEffect(() => {
        setloading(true)
        fetchAndUpdateData()
    }, [])



    if (loading) {
        return <h1>Loading...Please be Patient</h1>
    }

    const filterdata = (val) => {
        fetch(`https://json-server-p4w8.onrender.com/carsdata`)
            .then((res) => {
                // console.log(res)
                return res.json()
            }).then((data2) => {

                // setfilter(data)
                // setData(data)
                let filtered = data2.filter((item) => {
                    console.log(item.price)
                    if (val === "Below 5 Lac") {
                        if (item.price < 500000) {
                            return true
                        } else {
                            return false
                        }
                    }
                    else  if (val === "5 Lac-9 Lac") {
                        if (item.price >= 500000 && item.price < 900000) {
                            return true
                        } else {
                            return false
                        }
                    }
                    else  if (val === "9 Lac-15 Lac") {
                        if (item.price >= 900000 && item.price < 1500000) {
                            return true
                        } else {
                            return false
                        }
                    }
                    else  if (val === "15 Lac-30 Lac") {
                        if (item.price >=1500000 && item.price < 3000000) {
                            return true
                        } else {
                            return false
                        }
                    }
                    else  if (val === "30 Lac and Above") {
                        if (item.price >= 3000000) {
                            return true
                        } else {
                            return false
                        }
                    }
                })
                
                console.log("filtered", filtered)
                setData(filtered)
                // setloading(false)
                // console.log(data)

            }).catch((error) => {
                // setloading(true)
                console.log(error)
            })
    }


    const handleclickprice = (e) => {
        // if(e.target.innerText ==="Below 1 Lac" ){
        //     console.log(e.target)
        // }
        // setloading(true)
        // console.log(e.target)
        let val = e.target.innerText
        // console.log(val)
        filterdata(val)
    }

    return (
        <div> 
            <div className="carpage" >
                <div className="filterprice">  
                    <h3>Budget</h3>
                    <p style={{ opacity: "0.7" }}>Choose from options below</p>
                    <div style={{cursor:"pointer",backgroundColor:"teal",color:"white"}} onClick={handleclickprice}>Below 5 Lac</div>
                    <div  style={{cursor:"pointer",backgroundColor:"teal",color:"white"}} onClick={handleclickprice}>5 Lac-9 Lac</div>
                    <div  style={{cursor:"pointer",backgroundColor:"teal",color:"white"}} onClick={handleclickprice}>9 Lac-15 Lac</div>
                    <div  style={{cursor:"pointer",backgroundColor:"teal",color:"white"}} onClick={handleclickprice}>15 Lac-30 Lac</div>
                    <div  style={{cursor:"pointer",backgroundColor:"teal",color:"white"}} onClick={handleclickprice}>30 Lac and Above</div>
                </div>
                <div className="homepageproduct1">
                    {
                        data.map((item) => {
                            return <Productpage key={item.id} {...item} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>

    )
}



export default Car