import React from 'react';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { TendersList } from '../TendersList';

export const Main = ({ tenders }) => {
  
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
  )
};
