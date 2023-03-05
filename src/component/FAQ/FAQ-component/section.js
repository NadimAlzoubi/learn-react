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
                                <h2>Starbucks Coffe, start your day with it.</h2>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
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
