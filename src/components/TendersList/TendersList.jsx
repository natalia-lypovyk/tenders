import React, { useState, useEffect } from 'react';
import Flex from 'ustudio-ui/components/Flex';

import { TenderItem } from '../TenderItem';
import { baseUrl } from '../../constants';
import { getTender } from '../../api';

export const TendersList = ({ tenders }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const loadPath = () => {
      const list = tenders.map(item => {        
        return `${baseUrl}/${item.ocid}`;
      });

      return list;
    }

    const paths = loadPath();
    
    const loadData = () => {
      Promise
        .all(paths.map(url => getTender(url)))
        .then(setInfo);
    }
    loadData();

  }, []);

  return (
    <ul>
      <Flex direction='column'>
        {info.map(item => {
          return (
            <TenderItem key={item.uri} item={item} />
          )
        })}
      </Flex>
    </ul>
  );
}