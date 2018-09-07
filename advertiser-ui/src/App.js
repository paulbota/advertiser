import React, {Component} from 'react';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Campaigns from './pages/campaigns/Campaigns';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename='/'>
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/campaigns" component={Campaigns}/>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
