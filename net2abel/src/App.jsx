<<<<<<< HEAD
// src/App.jsx

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import NavbarComponent from './components/Navbar';
import ScrollToTop from './components/Scrolltotop';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/MyEvents';
import { Routes, Route } from 'react-router-dom';
>>>>>>> 29a1cb8f9217da9e3579acc3bc4b610483c93f78

function App() {
  return (
<<<<<<< HEAD
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 container my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
=======
    <>
      <NavbarComponent />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
          <Route path="/MyEvents" element={<MyEvents />} />
        </Routes>
      </div>
    </>
  )
>>>>>>> 29a1cb8f9217da9e3579acc3bc4b610483c93f78
}

export default App;
