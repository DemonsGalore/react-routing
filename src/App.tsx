import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Pokemon from './Pokemon';
import PokemonDetail from './PokemonDetail';
import About from './About';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokemon" exact component={Pokemon} />
                <Route path="/pokemon/:name" component={PokemonDetail} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
