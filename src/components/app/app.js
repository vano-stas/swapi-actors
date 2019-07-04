import React from 'react';
import Header from '../header/header';
import ActorsPage from '../actors-page/actors-page';
// import ActorsList from '../actors-list/actors-list';
import HomePage from '../home-page/home-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './app.css';

function App() {
    return (
        <Router>
            <div className='app'>
                <Header />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/actors' component={ActorsPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;