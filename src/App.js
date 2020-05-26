import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main, TenderPage } from './components';

export const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Main />
      </Route>  
      <Route path='/tenders/:id?'>
        <TenderPage />
      </Route> 
    </Switch>
  );
};
