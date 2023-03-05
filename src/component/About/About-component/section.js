import {React, Component, Fragment} from "react";
import img2 from './../../../img/coffe.png';
class Home_numbers extends Component{
    render(){
        return(
            <Fragment>
                <section className="container section">
                    <div className="row">
                        <div className="col-md-6 col-12 imgdiv">
                            <img src={img2}/>
                        </div>
                        <div className="col-md-6 col-12 textdiv">
                            <div>
                                <h2>About.</h2>
                                <h6>About.</h6>
                                <button className="btn">Learn more</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );    
    }
}

export default Home_numbers;
