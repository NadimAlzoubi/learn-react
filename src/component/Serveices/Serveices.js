import {React, Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Serveices-component/header';
import Numbers from './Serveices-component/numbrs';
import Section from './Serveices-component/section';
class Serveices extends Component{
  state = {
    red: "red",
    blue: "blue",
    green: "#00704A"
  }

render(){
    return(
      <Fragment>
          <Header />
          <Numbers />
          <Section />
      </Fragment>
    );  
  }
}
export default Serveices;
