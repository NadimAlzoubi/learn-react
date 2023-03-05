import {React, Component, Fragment} from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home/Home";
import Menu from "./component/Menu/Menu";
import Serveices from "./component/Serveices/Serveices";
import About from "./component/About/About";
import FAQ from "./component/FAQ/FAQ";
import Nav1 from './component/NAVs/nav1';
import Curd from "./component/Curd/Curd";
class App extends Component{
render(){
    return(
      <BrowserRouter>
        <Nav1 />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Curd" element={<Curd />} />
          <Route path="/Serveices" element={<Serveices />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    );  
  }
}
export default App;
