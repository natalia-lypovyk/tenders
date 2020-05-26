import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getTenders } from './config';

import { Main } from './components/Main';
import { TenderItemPage } from './components/TenderItemPage'

export const App = () => {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    try {
      (async function loadTenders () {
        const { data } = await getTenders();
  
        setTenders(data);
      })()
    } catch {
      console.log("Can't fetch tenders")
    }    
    
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <Main tenders={tenders} />
      </Route>  
      <Route path="/tenders/:id?">
        <TenderItemPage />
      </Route> */}    
    </Switch>
  );
};

// eslint-disable-next-line no-lone-blocks
{/* <Route path="/tender/:tenderId">
        <TenderPage />
      </Route> */}