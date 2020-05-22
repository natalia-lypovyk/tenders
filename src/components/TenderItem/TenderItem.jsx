import React from 'react';

import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import Styled from './TenderItem.styles';

export const TenderItem = ({ item }) => {
  const { tender } = item.records[0].compiledRelease;
  const { title, description } = item.records[0].compiledRelease.tender;
  const budgetAmount = `${tender.value?.amount} ${tender.value?.currency}`;

  const period = item.records[0].compiledRelease.planning?.budget.budgetBreakdown[0].period;
  const startDate = period?.startDate;
  const endDate = period?.endDate;

  const source = item.records[0].compiledRelease.planning?.budget.budgetBreakdown[0].sourceParty.name;

  return (
    <li>
      <Styled.Card>
        <Styled.Title>{title}</Styled.Title>
        <Flex alignment={{
          horizontal: 'space-between'
        }}>
          <Styled.Block>
            <Styled.Text>{source}</Styled.Text>
            <Text>Description: {description}</Text>
          </Styled.Block>

          <Styled.Block>
            <Text>
              Budget: {budgetAmount} 
            </Text>
            <Text>
              Start Date: {
                (startDate) && startDate
              }
            </Text>
            <Text>
              End Date: {endDate}
            </Text>
          </Styled.Block>
        </Flex>
      </Styled.Card>
    </li>
  );
};
