import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

import { baseUrl, getTender } from '../../config';

export const TenderItemPage = () => {
  const [tenderItemInfo, setTenderItemInfo] = useState([]);

  const { id } = useParams();
  const tenderPath = `${baseUrl}/${id}`;

  useEffect(() => {
    try {
      async function loadTender() {
        const data = await getTender(tenderPath);
  
        setTenderItemInfo(data);
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
  const eligibilityCriteria = tender?.eligibilityCriteria;

  const parties = tenderItemInfo.records?.[0].compiledRelease.parties?.[0];
  const name = parties?.name;
  const streetAddress = parties?.address?.streetAddress;
  const postalCode = parties?.address?.postalCode;

  const contactName = parties?.contactPoint?.name;
  const contactEmail = parties?.contactPoint?.email;
  const contactPhone = parties?.contactPoint?.telephone;

    const period = tenderItemInfo.records?.[0].compiledRelease.planning.budget.budgetBreakdown?.[0].period;
  const startDate = period?.startDate;
  const endDate = period?.endDate;

  return (
    <Flex>
      <Text>{console.log(startDate)}</Text>
      <Link to="/">Go back to all tenders</Link>
    </Flex>
  )
};
