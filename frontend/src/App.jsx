import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/navbar'
import './App.css'

function App() {
  

  return (
    <div id="root">
      <div className="main-content flex justify-between items-center">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
    </div>
  )
}

export default App
