import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getTenders } from './config';

import { Main, TenderItemPage } from './components';

export const App = () => {
  const [tenders, setTenders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      (async function loadTenders () {
        setIsLoading(true);
        const { data } = await getTenders();
  
        setTenders(data);
        setIsLoading(false);
      })()
    } catch {
      console.log("Can't fetch tenders")
    }    
    
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <Main tenders={tenders} isLoading={isLoading} />
      </Route>  
      <Route path="/tenders/:id?">
        <TenderItemPage />
      </Route> */}    
    </Switch>
  );
};
