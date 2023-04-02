import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Footer from "./Footer"
function Productdetails() {
    let { id } = useParams()
    let { category } = useParams()
    // let category1 =category
    console.log("id", id, "category", category)
    const [data1, setData] = useState({})
    const [loading, setloading] = useState(false)
    const [toggle, settoggle] = useState(false)
    const [text,settext] = useState("Show Number")
    // { category === "car" ? category1 = "carsdata": null }
    const fetchAndGetData = () => {
        if (category === "car") {
            fetch(`http://localhost:8080/carsdata/${id}`)
                .then((res) => {
                    console.log(res.url)
                    return res.json()
                }).then((data) => {
                    setloading(false)
                    console.log(data, "here")
                    setData(data)
                })

        } else if (category === "motorcycle") {
            fetch(`http://localhost:8080/homedata/${id}`)
                .then((res) => {
                    console.log(res.url)
                    return res.json()
                }).then((data) => {
                    setloading(false)
                    console.log(data, "here")
                    setData(data)
                })

        }
        else if (category === "scooter") {
            fetch(`http://localhost:8080/homedata/${id}`)
                .then((res) => {
                    console.log(res.url)
                    return res.json()
                }).then((data) => {
                    setloading(false)
                    console.log(data, "here")
                    setData(data)
                })

        }
        else if (category === "mobile") {
            fetch(`http://localhost:8080/homedata/${id}`)
                .then((res) => {
                    console.log(res.url)
                    return res.json()
                }).then((data) => {
                    setloading(false)
                    console.log(data, "here")
                    setData(data)
                })

        } else if (category === "house") {
            fetch(`http://localhost:8080/homedata/${id}`)
                .then((res) => {
                    console.log(res.url)
                    return res.json()
                }).then((data) => {
                    setloading(false)
                    console.log(data, "here")
                    setData(data)
                })

        }
    }


    useEffect(() => {
        setloading(true)
        fetchAndGetData()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

     const handleclick=()=>{
    settoggle(!toggle)
     if(text === "Show Number"){
        settext("Hide Number")
     }else{
        settext("Show Number")
     }
     }

    return (
        <div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
                <div style={{ marginTop: "10px", padding: "15px", paddingBottom: "30px", width: "25%", margin: "auto", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                    {/* <h1>welcome to productdetails page</h1> */}
                    {/* <h1>{data.id}</h1> */}
                    <img width="300px" height="260px" src={data1.image} alt="" />
                    <h3>Price: Rs.{data1.price}</h3>
                    <h3>Model: {data1.description}</h3>
                    <h3>Posted on: {data1.uploadeddate}</h3>
                    <h3>Location: {data1.location}</h3>
                </div>
                <div style={{ border: "4px solid teal", padding: "30px", width: "20%", margin: "auto", marginTop: "25px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                    <h2>Chat with Seller</h2>
                    <button style={{border:"none",outline:"none",backgroundColor:"lightGreen",fontWeight:"600",padding:"5px 10px",cursor:"pointer"}} onClick={handleclick}>Click to {text}</button>
                    {
                        toggle ?  <p>Mob no: 9134721655</p> :
                        <p>Mob no: 913*****5</p>
                       
                    }

                </div>
            </div>
            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </div>
    )


}

export default Productdetails