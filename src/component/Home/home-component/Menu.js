import {React, Component, Fragment} from "react";
import img2 from './../../img/coffe.png';
class Menu extends Component{


    constructor(){
        super();
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate', prevProps, prevState);
    }
 

    state = {
        foodList: [
          {id: 1, name: "shawarma", price: 100},
          {id: 2, name: "batata", price: 70},
          {id: 3, name: "falafl", price: 50}
        ],
        drinkList: [
          {id: 1, name: "orange", price: 90},
          {id: 2, name: "limon", price: 70},
          {id: 3, name: "water", price: 10}
        ]
      }

      add = (eff) => {
        eff.preventDefault();
        let foodItems = this.state.foodList;
        foodItems.push({id: 4, name: "kabab", price: 90});
        this.setState({
            foodList: foodItems
        })
      }


        render(){
            console.log('render');
            const foodItems = this.state.foodList;
            const drinkItems = this.state.drinkList;
            const foodItem = foodItems.map((item, i) => {
                return(
                    <tr key={i}>
                        <td style={{padding: 10}}>{item.id}</td>
                        <td style={{padding: 10}}>{item.name}</td>
                        <td style={{padding: 10}}>{item.price}</td>
                    </tr>
                )
            });
            const drinkItem = drinkItems.map((item, i) => {
                return(
                    <tr key={i}>
                        <td style={{padding: 10}}>{item.id}</td>
                        <td style={{padding: 10}}>{item.name}</td>
                        <td style={{padding: 10}}>{item.price}</td>
                    </tr>
                )
            });
        return(
            <Fragment>
                <section className="container section">
                    <div className="row">
                        <div className="col-md-6 col-12 imgdiv">
                            <img src={img2}/>
                        </div>
                        <div className="col-md-6 col-12 textdiv">
                            <div>
                                <table border="1">
                                    <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Price</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {foodItem}
                                    </tbody>
                                </table>
                                <form onSubmit={this.add}>
                                            <input type="text" />
                                            <input type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container section">
                    <div className="row">
                        <div className="col-md-6 col-12 imgdiv">
                            <img src={img2}/>
                        </div>
                        <div className="col-md-6 col-12 textdiv">
                            <div>
                                <table border="1">
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Price</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {drinkItem}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );    
    }
}

export default Menu;
