import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class EUNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="eu-nav">
      <Navbar color="light" light expand="md">
      <NavbarBrand className="collapse-mode" href="/"><img src="https://cxm.cognizant.com/EU/assets/images/img/eu_logo.png" alt="Logo" width="50" height="35" /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" className="nav-link" > HOME</Link>
            </NavItem>
            <NavItem>
              <Link to="/latestthinking" className="nav-link" > LATEST THINKING</Link>
            </NavItem>
            <NavItem>
              <Link to="/casestudies" className="nav-link" > CASE STUDIES</Link>
            </NavItem>
            <NavItem>
              <Link to="/solutions" className="nav-link" > SOLUTIONS</Link>
            </NavItem>
            <NavItem className="full-mode">
            <Link to="/" className="nav-link" ><img src="https://cxm.cognizant.com/EU/assets/images/img/eu_logo.png" alt="Logo" width="100" height="75" /></Link>
            </NavItem>
            <NavItem>
              <Link to="/accountupdates" className="nav-link" > ACCOUNT UPDATES</Link>
            </NavItem>
            <NavItem>
              <Link to="/testimonials" className="nav-link" > ACCOLADES</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                MORE
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/events" >EVENTS</Link> 
                </DropdownItem>
                <DropdownItem>
                  <Link to="/newsletters">NEWSLETTER</Link>  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar> 
      </div>
    );
  }
}