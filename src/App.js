import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';


function App() {
  const [users, setusers] = useState([{ username: "sandy", password: "5245" }])
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
          <Route path="/signup" element={<Signup users={users} setusers={setusers} />}></Route>
          <Route path="/landing" element={<Landing />}></Route>


        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
