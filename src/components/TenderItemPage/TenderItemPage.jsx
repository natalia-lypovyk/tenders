import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Grid from 'ustudio-ui/components/Grid/Grid';
import Flex from 'ustudio-ui/components/Flex';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Text from 'ustudio-ui/components/Text';
import Spinner from 'ustudio-ui/components/Spinner';

import { baseUrl, getTender } from '../../config';

import Styled from './TenderItemPage.styles';

export const TenderItemPage = () => {
  const [tenderItemInfo, setTenderItemInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const tenderPath = `${baseUrl}/${id}`;

  useEffect(() => {
    try {
      async function loadTender() {
        setIsLoading(true);
        const data = await getTender(tenderPath);

        setTenderItemInfo(data);
        setIsLoading(false);
      };

      loadTender();
    } catch {
      console.log('error')
    }
  }, [tenderPath]);

  const tender = tenderItemInfo.records?.[0].compiledRelease.tender;
  const title = tender?.title;
  const description = tender?.description;
  const budgetAmount = `${tender?.value.amount} ${tender?.value.currency}`;

  const tenderId = tenderItemInfo.records?.[0].compiledRelease.id;

  const parties = tenderItemInfo.records?.[0].compiledRelease.parties?.[0];
  const streetAddress = parties?.address?.streetAddress;
  const postalCode = parties?.address?.postalCode;

  const contactName = parties?.contactPoint?.name;
  const contactEmail = parties?.contactPoint?.email;
  const contactPhone = parties?.contactPoint?.telephone;

  const period = tenderItemInfo.records?.[0].compiledRelease.planning.budget.budgetBreakdown?.[0].period;
  const startDate = period?.startDate;
  const endDate = period?.endDate;

  const publishedDate = tenderItemInfo?.publishedDate;

  return (
    <>
      {(isLoading) ? (
        <Flex
          alignment={{
            horizontal: "center",
            vertical: "center"
          }}
          margin={{
            top: 'large'
          }}>
          <Spinner
            appearance={{
              color: 'var(--c-primary-light)',
              size: 40
            }}
          />
        </Flex>

      ) : (
          <Styled.Wrapper>
            <Flex
              alignment={{
                horizontal: "center"
              }}
              margin={{
                bottom: "medium"
              }}
            >
              <Text
                variant="h2"
                color="var(--c-primary)"
              >
                Title: {title}
              </Text>
            </Flex>

            <Flex
              margin={{
                bottom: "medium"
              }}
            >
              <Styled.ColoredText variant="h4">Description:</Styled.ColoredText>
              <Styled.Description>{description}</Styled.Description>
            </Flex>

            <Flex>
              <Grid>
                <Cell>
                  <Flex direction="column" margin={{
                    top: 'medium',
                    bottom: 'medium'
                  }}
                  >
                    <Flex>
                      <Styled.ColoredText>Tender ID:</Styled.ColoredText>
                      <Styled.Content>{tenderId}</Styled.Content>
                    </Flex>
                    <Flex>
                      <Styled.ColoredText>Budget:</Styled.ColoredText>
                      <Styled.Content>{budgetAmount}</Styled.Content>
                    </Flex>
                    <Flex>
                      <Styled.ColoredText>Date of Publication:</Styled.ColoredText>
                      <Styled.Content>{publishedDate}</Styled.Content>
                    </Flex>
                    <Flex>
                      <Styled.ColoredText>Start Date:</Styled.ColoredText>
                      <Styled.Content>{startDate}</Styled.Content>
                    </Flex>
                    <Flex>
                      <Styled.ColoredText>End Date:</Styled.ColoredText>
                      <Styled.Content>{endDate}</Styled.Content>
                    </Flex>
                  </Flex>
                </Cell>
                <Cell>
                  <Flex direction="column">
                    <Styled.ContactsTitle>Contacts</Styled.ContactsTitle>
                    <Flex>
                      <Styled.ColoredText>Address:</Styled.ColoredText>
                      <Text>{streetAddress}, {postalCode}</Text>
                    </Flex>
                    <Flex>
                      <Styled.ColoredText>Name:</Styled.ColoredText>
                      <Text>{contactName}</Text>
                    </Flex>
                    <Flex>
                      <Styled.ColoredText>Email:</Styled.ColoredText>
                      <Text>{contactEmail}</Text>
                    </Flex>
                    <Flex>
                      <Styled.ColoredText>Phone:</Styled.ColoredText>
                      <Text>{contactPhone}</Text>
                    </Flex>
                  </Flex>
                </Cell>
              </Grid>
            </Flex>

            <Flex
              alignment={{
                horizontal: 'end'
              }}
              margin={{
                top: 'large'
              }}
            >
              <Link to="/">Go back to all tenders</Link>
            </Flex>
          </Styled.Wrapper>
        )
      };
    </>
  )
}
