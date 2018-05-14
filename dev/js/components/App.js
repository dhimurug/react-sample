import React, {Component} from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
require('../../scss/style.scss');


const App = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content" >
        {children}
      </div>
    </div>
  );
};

export default App;
