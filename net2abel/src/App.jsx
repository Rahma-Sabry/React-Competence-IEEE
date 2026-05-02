import NavbarComponent from './components/Navbar';
import ScrollToTop from './components/Scrolltotop';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/MyEvents';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
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
}

export default App
