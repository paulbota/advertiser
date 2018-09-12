import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Campaigns from './pages/Campaigns';

/**
 * Root component with routing
 */
class App extends Component {
    render() {
        return (
            <BrowserRouter basename='/'>
                <main>
                    <Route exact path="/" component={Campaigns}/>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
