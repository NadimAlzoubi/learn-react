import {React, Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './home-component/header';
import Numbers from './home-component/numbrs';
import Section from './home-component/section';
class Home extends Component{
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
export default Home;
