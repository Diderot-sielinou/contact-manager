import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="addContatct" element={<AddContact/>} />
      <Route path="editContatct/:id" element={<EditContact/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
