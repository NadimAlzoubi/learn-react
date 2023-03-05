import {React, Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Menu-component/table';
class Menu extends Component{
render(){
    return(
      <Fragment>
          <Table />
      </Fragment>
    );  
  }
}
export default Menu;
