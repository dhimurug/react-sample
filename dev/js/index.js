import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import CarouselSlide from './containers/carousel';
import LatestThinking from './containers/latest-thinking';
import CaseStudies from './containers/case-studies';
import Solutions from './containers/solutions';
import AccountUpdates from './containers/account-updates';
import Testimonials from './containers/testimonials';
import Events from './containers/events';
import Newsletters from './containers/newsletters';
import UserList from './containers/user-list';
import UserDetails from './containers/user-detail';



const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={CarouselSlide} />
                <Route exact path="/latestthinking" component={LatestThinking} />
                <Route exact path="/casestudies" component={CaseStudies} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/accountupdates" component={AccountUpdates} />
                <Route exact path="/testimonials" component={Testimonials} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/newsletters" component={Newsletters} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
