import React, {Component} from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
require('../../scss/style.scss');

class App extends Component {
    render() {
        return (
            <Header />
        );
    }
}


export default App;
