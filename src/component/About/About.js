import {React, Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './About-component/header';
import Numbers from './About-component/numbrs';
import Section from './About-component/section';
import Users from "./About-component/users";
class About extends Component{
render(){
    return(
      <Fragment>
        <Users />
          {/* <Header /> */}
          {/* <Numbers /> */}
          {/* <Section /> */}
      </Fragment>
    );  
  }
}
export default About;
