import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main, TenderItemPage } from './components';

export const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Main />
      </Route>  
      <Route path='/tenders/:id?'>
        <TenderItemPage />
      </Route> 
    </Switch>
  );
};
