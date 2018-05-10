import React, {Component} from 'react';
//import header from '/header';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

class App extends Component {
    render() {
        return (
        <div>
            <h2>User List</h2>
            <UserList />
            <hr />
            <h2>User Details</h2>
            <UserDetails />

        <h3>tEST</h3>
        </div>
        );
    }
}


export default App;
