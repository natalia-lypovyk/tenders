import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Grid from 'ustudio-ui/components/Grid/Grid';
import Flex from 'ustudio-ui/components/Flex';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Text from 'ustudio-ui/components/Text';
import Spinner from 'ustudio-ui/components/Spinner';
import Button from 'ustudio-ui/components/Button';

import { baseUrl, getTenders } from '../../config';

import Styled from './TenderPage.styles';

export const TenderPage = () => {
  const [tenderItemInfo, setTenderItemInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { goBack } = useHistory();

  const { id } = useParams();
  const tenderPath = `${baseUrl}/${id}`;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await getTenders(tenderPath);

        setTenderItemInfo(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })() 
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

const titles = [
  ['Tender ID:', tenderId],
  ['Budget:', budgetAmount],
  ['Date of Publication:', publishedDate],
  ['Start Date:', startDate],
  ['End Date:', endDate]
];

const contacts = [
  ['Address:', [streetAddress, postalCode]],
  ['Name:', contactName],
  ['Email:', contactEmail],
  ['Phone:', contactPhone]
];

return (
  <>
    {(isLoading) ? (
      <Flex
        alignment={{
          horizontal: 'center',
          vertical: 'center'
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
              horizontal: 'center'
            }}
            margin={{
              bottom: 'medium'
            }}
          >
            <Text
              variant='h2'
              color='var(--c-primary)'
            >
              Title: {title}
            </Text>
          </Flex>

          <Flex
            margin={{
              bottom: 'medium'
            }}
          >
            <Styled.ColoredText variant='h4'>Description:</Styled.ColoredText>
            <Styled.Description>{description}</Styled.Description>
          </Flex>

          <Flex>
            <Grid>
              <Cell>
                <Flex direction='column' margin={{
                  top: 'medium',
                  bottom: 'medium'
                }}
                >
                  {titles.map(title => {
                    return (
                      <Flex>
                        <Styled.ColoredText>{title[0]}</Styled.ColoredText>
                        <Styled.Content>{title[1]}</Styled.Content>
                      </Flex>
                    )
                  })}
                </Flex>
              </Cell>

              <Cell>
                <Flex direction='column'>
                  <Styled.ContactsTitle>Contacts</Styled.ContactsTitle>
                  {contacts.map(contact => {
                    return (
                      <Flex>
                        <Styled.ColoredText>{contact[0]}</Styled.ColoredText>
                        <Text>{contact[1]}</Text>
                      </Flex>
                    )
                  })}
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
            <Button
              appearance='outlined'
              onClick={() => goBack()}
            >
              Go back to all tenders
              </Button>
          </Flex>
        </Styled.Wrapper>
      )
    };
  </>
)
}
