import React from 'react';
import { Link } from 'react-router-dom';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import Styled from './TenderItem.styles';

export const TenderItem = ({ item }) => {
  const { publishedDate } = item;

  const records = item.records[0];
  const { ocid } = records;
  const { tender } = records.compiledRelease;
  const { title, description } = records.compiledRelease.tender;
  const budgetAmount = `${tender.value?.amount} ${tender.value?.currency}` ?? 'No budget defined';
  const source = records.compiledRelease.planning?.budget.budgetBreakdown[0].sourceParty.name;

  return (
    <li>
      <Styled.Card>
        <Styled.Title variant="h4">
          <Link to={`/tenders/${ocid}`}>{title}</Link>
        </Styled.Title>
        <Flex alignment={{
          horizontal: 'space-between'
        }}>
          <Styled.Block>
            <Styled.CardText>Source: {source}</Styled.CardText>
            <Text>Description: {description}</Text>
          </Styled.Block>

          <Styled.Block>
            <Text>
              Budget: {budgetAmount} 
            </Text>
            <Text>Date of Publication: {publishedDate}</Text>
          </Styled.Block>
        </Flex>
      </Styled.Card>
    </li>
  );
};
