import {React, Component, Fragment} from "react";
class Home_numbers extends Component{
    render(){
        return(
            <Fragment>
                <section className="container-fluid numbers">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12 text-center">
                            <h2>+1200</h2>
                            <h6>Lorem</h6>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 text-center">
                            <h2>+1800</h2>
                            <h6>Lorem</h6>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 text-center">
                            <h2>+5200</h2>
                            <h6>Lorem</h6>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 text-center">
                            <h2>+120</h2>
                            <h6>Lorem</h6>
                        </div>
                    </div>
                </section>
            </Fragment>
        );    
    }
}

export default Home_numbers;
