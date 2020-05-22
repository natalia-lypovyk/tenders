import React, { useState, useEffect } from 'react';
import { Flex, Text } from 'ustudio-ui';

import { getTenders } from './api';
import { TendersList } from './components/TendersList';

export const App = () => {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    async function loadTenders() {
      const { data } = await getTenders();

      setTenders(data);      
    }

    loadTenders();
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
      {(tenders.length) && <TendersList tenders={tenders} />}
    </Flex>
  );
};
