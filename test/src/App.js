import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/Register' Component={Register} />
       
      </Routes>
    </div>
  );
}

export default App;
