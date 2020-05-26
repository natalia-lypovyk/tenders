import React, { useState, useEffect } from 'react';
import Flex from 'ustudio-ui/components/Flex';

import { baseUrl, getTender } from '../../config';

import { TenderItem } from '../TenderItem';

export const TendersList = ({ tenders }) => {
  const [tenderInfo, setTenderInfo] = useState([]);

  useEffect(() => {
    const loadPath = () => {
      return tenders.map(item => `${baseUrl}/${item.ocid}`);
    }

    async function loadData () {
      for (const path of loadPath()) {
        const tenderInfo = await getTender(path);
        setTenderInfo((prev) => [...prev, tenderInfo]);
      }      
    }
    
    loadData();
    
  }, []);
  
  return (
    <ul>
      <Flex direction='column'>
        {tenderInfo.map(tender => {
          return (
            <TenderItem 
              key={tender.actualReleases[0].ocid} 
              item={tender} 
            />
          )
        })}
      </Flex>
    </ul>
  );
}
