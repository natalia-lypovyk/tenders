import React, { useState, useEffect } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import Spinner from 'ustudio-ui/components/Spinner';

import { getTenders, baseUrl } from '../../config';

import { TendersList } from '../TendersList';

export const Main = () => { 
  const [tenders, setTenders] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const { data } = await getTenders(baseUrl);
  
        setTenders(data);
        setLoading(false);
      })()
    } catch {
      console.log('Can&apos;t fetch tenders')
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
        (isLoading) ? (
          <Spinner 
            appearance={{
              color: 'var(--c-primary-light)',
              size: 40
            }}
          />
          ) : (
          (tenders.length) ? (
            <TendersList tenders={tenders} />
          ) : (
              <Text>No tenders here yet</Text>
            )
        )
        
      }
    </Flex>
  )
};
