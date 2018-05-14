import React, {Component} from 'react';
import EUNavbar from '../containers/navbar';
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
        </div>
        );
    }
}


export default Header;
