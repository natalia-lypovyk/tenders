import React from 'react';
import { Text, Flex } from 'ustudio-ui';
import { 
  StyledCard, 
  StyledDiv, 
  StyledText, 
  StyledTitle
} from './TenderItem.styles';

export const TenderItem = ({ item }) => {
  const tenderInfo = item.records[0].compiledRelease.tender;
  const title = tenderInfo?.title;
  const description = tenderInfo?.description;
  const budgetAmount = `${tenderInfo.value?.amount} ${tenderInfo.value?.currency}` || 'Budget is not defined';

  const period = item.records[0].compiledRelease.planning?.budget.budgetBreakdown[0].period;
  const startDate = period?.startDate;
  const endDate = period?.endDate;

  const source = item.records[0].compiledRelease.planning?.budget.budgetBreakdown[0].sourceParty.name;

  return (
    <li>
      <StyledCard>
        <StyledTitle>{title}</StyledTitle>
        <Flex alignment={{
          horizontal: 'space-between'
        }}>
          <StyledDiv>
            <StyledText>{source}</StyledText>
            <Text>Description: {description}</Text>
          </StyledDiv>

          <StyledDiv>
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
          </StyledDiv>
        </Flex>


      </StyledCard>
    </li>
  );
};

