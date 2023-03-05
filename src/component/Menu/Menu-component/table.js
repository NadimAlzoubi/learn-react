import {React, Component, Fragment} from "react";
class Table extends Component{

    state = {
        items: [

        ]
    };

    deleteItem = (id) => {
        let items = this.state.items.filter((item) => {
            return(
                item.id !== id
            );
        });
        this.setState({items});
    }   

    idCount = 1;
    name = '';
    price = '';

    sub = (event) => {
        event.preventDefault();
        let newItemName = event.target.name.value;
        let newItemprice = event.target.price.value;
        let newItem = this.state.items.push({id: this.idCount, name: newItemName, price: newItemprice})
        this.setState({newItem});
        this.idCount++;
        event.target.name.value = this.name;
        event.target.price.value = this.price;
    }


    

    render(){
    const items = this.state.items;
    const item = items.map((item) => {
        return(
            <Fragment>
                <td key={item.id}>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button onClick={() => {this.deleteItem(item.id)}}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </td>
            </Fragment>
        )
    })
    

    return (
      <Fragment>
        <table className="todoTable">
            <thead>
                <tr>
                <td>Name</td>
                <td>Price</td>
                <td>action</td>
                </tr>
            </thead>
            <tbody>{(item.length == 0) ? "no items here" : item}</tbody>
        </table>
        <form onSubmit={this.sub}>
            <input type="text" id="name" name="name" placeholder="Enter the name" />
            <input type="number" id="price" name="price" placeholder="Enter the price" />
            <input type="submit" placeholder="Enter the name" />
        </form>

      </Fragment>
    )  
  }
}

export default Table;
