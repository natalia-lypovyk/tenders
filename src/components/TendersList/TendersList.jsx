import React, { useState, useEffect } from 'react';
import Flex from 'ustudio-ui/components/Flex';

import { baseUrl, getTender } from '../../config';

import { TenderItem } from '../TenderItem';

export const TendersList = ({ tenders }) => {
  const [tenderInfo, setTenderInfo] = useState([]);

  useEffect(() => {
    const loadPath = () => {
      const list = tenders.map(item => {        
        return `${baseUrl}/${item.ocid}`;
      });

      return list;
    }

    const paths = loadPath();

    async function loadData () {
      for (const path of paths) {
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
