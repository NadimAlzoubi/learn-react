import {React, Component, Fragment} from "react";
import axios from 'axios';
class users extends Component{

    state = {
        users: []
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            this.setState({
                users: res.data
            });
        });
    }
    render(){
        const users = this.state.users.map((user, i) => {
            return(
                <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            )
        });
        return(
            <Fragment>
                <h1>users</h1>
                <table>
                    <thead><tr><td>id</td><td>name</td><td>username</td><td>email</td></tr></thead>
                    <tbody>{users}</tbody>
                </table>
            </Fragment>
        );    
    }
}

export default users;
