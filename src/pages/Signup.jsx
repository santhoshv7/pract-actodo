import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup(props) {

    const users = props.users
    const setusers = props.setusers

    const navigate = useNavigate()

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUInput(event) {
        setEusername(event.target.value)

    }

    function handlePInput(event) {
        setEpassword(event.target.value)

    }

    function addUser() {
        setusers([...users, { username: eusername, password: epassword }])
        console.log(users)
        navigate("/")

    }



    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border border-black rounded-md bg-transparent p-1" placeholder="User Name" onChange={handleUInput}></input>
                    <input type="text" className="w-52 border border-black rounded-md bg-transparent p-1" placeholder="Password" onChange={handlePInput}></input>
                    <input type="text" className="w-52 border border-black rounded-md bg-transparent p-1" placeholder="Confirm Password"></input>
                    <button className="bg-[#FCA201] w-24 rounded-md p-1" onClick={addUser}>Sign Up</button>
                    <p>Already have an account? <Link className="underline" to={"/"}>Login</Link></p>

                </div>


            </div>


        </div>
    )
}
export default Signup