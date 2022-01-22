import React from 'react';
import Home from './Home/Home';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <main>
    <Switch>
        <Route path="/" component={Home} exact />
    </Switch>
   </main>
  );
};

export default App;
