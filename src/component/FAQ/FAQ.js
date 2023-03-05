import {React, Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './FAQ-component/header';
import Numbers from './FAQ-component/numbrs';
import Section from './FAQ-component/section';
class FAQ extends Component{
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
export default FAQ;
