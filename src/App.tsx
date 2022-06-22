import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photos from "./Photos";
import Users from "./Users";
import Layout from "./Layout";
import Rooms from "./Rooms";
import Cities from "./Cities";
import Countries from "./Countries";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="users" element={<Users />} />
            <Route path="photos" element={<Photos />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="cities" element={<Cities />} />
            <Route path="countries" element={<Countries />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
