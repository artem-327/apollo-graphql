import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShortUrl from './pages/ShortUrl';
import UrlStats from './pages/UrlStats';
import UrlList from './pages/UrlList';



class Routes extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/urllist/:username' component={UrlList} />
                <Route exact path='/:urlId' component={ShortUrl} />
                <Route exact path='/:urlId/stats' component={UrlStats} />
                
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
