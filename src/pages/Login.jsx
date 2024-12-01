import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate = useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users




    function handleUInput(event) {
        setEusername(event.target.value)

    }

    function handlePInput(event) {
        setEpassword(event.target.value)

    }

    function checkUser() {
        var userfound = false;



        users.forEach(function (item) {
            if (item.username == eusername && item.password == epassword) {
                console.log("Login success")
                userfound = true;
                navigate("/landing", { state: { user: eusername } })
            }


        })

        if (userfound === false) {
            console.log("Login failed")
            setRuser(false)
        }

    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign up before you login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border border-black rounded-md bg-transparent p-1" placeholder="User Name" onChange={handleUInput}></input>
                    <input type="text" className="w-52 border border-black rounded-md bg-transparent p-1" placeholder="Password" onChange={handlePInput}></input>

                    <button className="bg-[#8272DA] w-24 rounded-md p-1" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link className="underline" to={"/signup"}>Sign Up</Link></p>


                </div>


            </div>


        </div>
    )
}
export default Login