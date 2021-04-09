import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoanAid from './pages/LoanAid';
import Result from './pages/Result';



class Routes extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LoanAid} />
                <Route exact path='/result' component={Result} />
                
                <Route
                render={function() {
                    return <h1>Not Found</h1>;
                }}
                />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default Routes;
