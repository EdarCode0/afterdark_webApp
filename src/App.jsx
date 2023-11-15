import "./App.css";
import {
  AppNavbar,
  Home,
  About,
  Events,
  Footer,
  Radio,
  EventDetails,
  SignIn,
} from "./components/MyCpomponents";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <AppNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
