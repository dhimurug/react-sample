import React, {Component} from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import EUNavbar from '../containers/navbar';
import CarouselSlide from '../containers/carousel';
import { Button } from 'reactstrap';

class Header extends Component {
  
    render() {
      var style = {
        width: '1350px',
        height:'300px'
        //width:'100%'
      };
        return (
        <div>
          <div id="overlay"> <EUNavbar /> </div>
          <CarouselSlide />
            <h2>User List</h2>
            <UserList />
            <hr />
            <h2>User Details</h2>
            <UserDetails />
        </div>
        );
    }
}


export default Header;
