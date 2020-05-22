import React, { useState, useEffect } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { getTenders } from './config';

import { TendersList } from './components/TendersList';

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
    <Flex
      alignment={{
        horizontal: 'center',
        vertical: 'center',
      }}
      direction="column"
    >
      <Text color="var(--c-primary)" variant="h1">Tenders</Text>

      {
        (tenders.length) ? (
          <TendersList tenders={tenders} />
        ) : (
            <Text>No tenders here yet</Text>
          )
      }
    </Flex>
  );
};
