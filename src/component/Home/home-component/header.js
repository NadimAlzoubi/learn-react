import {React, Component, Fragment} from "react";
class Header extends Component{
    render(){
        return(
            <Fragment>
                <header>
                    <div className="container-fluid con1">
                        <div className="row h-100">
                            <div className="col-md-6 col-12 ccc d-flex align-items-center justify-content-center">
                                <div className="w-100 ddd">
                                <h1>Starbucks Coffe, Home Page.</h1>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <button className="btn"><span>Order Now <ion-icon name="fast-food-outline"></ion-icon></span></button>
                                <button className="btn"><span>Learn More <ion-icon name="chevron-forward-outline"></ion-icon></span></button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 ccc">
                                
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        );    
    }
}

export default Header;
