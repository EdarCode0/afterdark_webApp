import "./App.css";
import { AppNavbar, Home, About, Events, Contact, Footer } from './components/MyCpomponents';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <AppNavbar />
      <div>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/events" element={ <Events /> }/>
          <Route path="/contact" element={ <Contact /> }/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
