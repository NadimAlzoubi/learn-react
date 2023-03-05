import {React, Component, Fragment} from "react";
class Table extends Component{

    state = {
        items: [
            {id: 1, name: "React"},
            {id: 2, name: "Node"}
        ],
        isEdit: false
    };
    name = '';



    // add food item 
    addFoodItem = (event) => {
        event.preventDefault();
        let newItemName = event.target.foodItem.value;
        if (newItemName == '') {
            alert("Please enter data");
        }else{
            let newItem = this.state.items.push({id: Math.random(), name: newItemName})
            this.setState({newItem});
            event.target.foodItem.value = this.name;
        }
    }


    // delete food item
    deleteFoodItem = (id) => {
        let items = this.state.items.filter((item) => {
            return(
                item.id !== id
            );
        });
        this.setState({items});
    }



/////////////////////////////////////////////////////////////    
        // normal
        normalFoodReturn = () => {
            let idCon = 1;
            const items = this.state.items;
            const item = items.map((item) => {
                return(
                    <Fragment>
                        <div key={item.id} className="d-flex justify-content-between px-3 my-3">
                            <span>
                            <span id="idNum">{idCon++}- </span>
                            <span>{item.name}</span>
                            </span>
                            <span className="d-flex">
                            <button onClick={() => {this.deleteFoodItem(item.id)}}>
                                Delete
                            </button>
                            </span>
                        </div>
                    </Fragment>
                )
            }
        )
        return item;
    }
/////////////////////////////////////////////////////////////    


    render(){
    return (
      <Fragment>
        <div className="container">
            <div className="row">
                <div className="mx-auto bg-info text-center rounded" style={{width: "700px", marginTop: "3rem", padding: "10px"}}>
                <h2>Menu Items</h2>
                <form onSubmit={this.addFoodItem} className="d-flex justify-content-between px-3 my-4">
                    <input type="text" name="foodItem" placeholder="Add Item" />
                    <input type="submit" name="add" value="Add" />
                </form>
            {this.normalFoodReturn()}
                </div>
            </div>
        </div>
      </Fragment>
    )  
  }
}
export default Table;
