import { useEffect, useState } from "react"

const Login = () => {
    let initstate = {
        username: "",
        password: null
    }
    const [form1, setform] = useState(initstate)
    const [text, settext] = useState("")
    // const [value,setvalue] = useState("")

    const fetchlogindata = () => {
        fetch(`https://json-server-p4w8.onrender.com/users`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data[0].password, "see")

                let flag = false
                // let count =0
               
                if (form1.username !== "" && form1.password !== "") {
                    for (let i = 0; i <= data.length - 1; i++) {

                        if (form1.username === data[i].username &&
                            form1.password === data[i].password) {
                            flag = true
                            // count=1
                            // return
                        }
                    }
                    if (flag === true) {
                        console.log('login done')
                        settext("Login Successfull")
                    } else {
                        console.log("login fail")
                        settext("Login Failed")
                    }

                }
            })


    }




    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(e.target.username.value, "useename")
        console.log(e.target.password.value, "password")
        console.log(form1, "here")
        fetchlogindata()
        // console.log(e.target,"set")
        // console.log(formdata)
        // setform(...form, e.target.type === "text" ? form.username =(e.target.username.value):(e.target.password.value) )
    }

    useEffect(() => {
        fetchlogindata()
    }, [])

    const handelchange = (e) => {
        console.log(e.target.type)
        // setvalue(e.target.value)
        if (e.target.type === "text") {
            form1.username = e.target.value
        } else {
            form1.password = +e.target.value
        }


        setform(form1)

        // if(e.target.type === "password")setform( {username,password:e.target.value})
    }


    console.log(form1)
    return (
        <div style={{marginTop:"40px"}}>
        <h1>{text}</h1>
        <div style={{ backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)", borderRadius:"10px", display:"flex",flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",  height:"400px",width:"600px",margin:"auto"}}>
           
            <form style={{display:"flex",flexDirection:"column"}} onSubmit={handlesubmit}>
                <label style={{fontWeight:"600", padding:"20px",fontSize:"20px"}}>
                    Username
                    <input style={{padding:"8px",border:"1px solid black",background:"none"}}  name="username" type="text" onChange={handelchange} />
                </label>
                <label  style={{fontWeight:"600", padding:"20px",fontSize:"20px",marginBottom:"15px"}}>
                    Password
                    <input style={{background:"none",border:"1px solid black", padding:"8px"}}  name="password" type="password" onChange={handelchange} />
                </label>
                <input style={{ borderRadius:"6px", background:"teal",color:"white",border:"none", padding:"10px 13px",width:"100px",marginLeft:"47%",}} type="submit" />
            </form>
        </div>
        </div>
    )
}
export default Login