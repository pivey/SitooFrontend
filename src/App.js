import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './views/Users';
import Products from './views/Products';
import Manufacturers from './views/Manufacturers';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/Products" component={Products} />
                <Route exact path="/Manufacturers" component={Manufacturers} />
            </Switch>
        </Router>
    );
}

export default App;
