import './App.css';
import { Route, Routes } from "react-router-dom";
import BasicNavBar from './Navbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Map from './components/Map.js';
import Forum from './components/Forum.js';
import Attendance from './components/Attendance/Attendance.js';
import Updates from './components/Updates.js';
import Login from './components/Login.js'
import Missing from './components/Attendance/Missing.js'

function App() {
  return (
    <div className="App">
      <BasicNavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/forum" element={<Forum />} />
        <Route exact path="/attendance" element={<Attendance />} />
        <Route exact path="/missing" element={<Missing />} />
        <Route exact path="/updates" element={<Updates />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;