// src/App.jsx

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 container my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
