import React, { useState, useEffect } from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';
import Spinner from 'ustudio-ui/components/Spinner';

import { getTenders, baseUrl } from '../../config';

import { TendersList } from '../TendersList';

export const Main = () => {
  const [tenders, setTenders] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        
        const { data } = await getTenders(baseUrl);

        setTenders(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })()
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

      {isLoading && !error && (
        <Spinner
          appearance={{
            color: 'var(--c-primary-light)',
            size: 40
          }}
        />
      )}

      {!isLoading && !error && (
        <TendersList tenders={tenders} />
      )}

      {!isLoading && error && (
        <Text>{error}</Text>
      )}
    </Flex>
  )
};
