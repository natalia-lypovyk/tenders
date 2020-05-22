import React, { useState, useEffect } from 'react';
import { Flex } from 'ustudio-ui';

import { TenderItem } from '../TenderItem';
import { BASE_URL } from '../../constants';
import { getTender } from '../../api';

export const TendersList = ({ tenders }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const loadPath = () => {
      const list = tenders.map(item => {
        const path = `${BASE_URL}/${item.ocid}`;
        return path;
      });

      return list;
    }

    const pathes = loadPath();
    
    const loadData = async () => {
      Promise
        .all(pathes.map(url => getTender(url)))
        .then(res => setInfo(res)
        );
    }
    loadData();

  }, []);

  return (
    <ul>
      <Flex direction='column'>
        {info.map(item => (
          <TenderItem key={item.uri} item={item} />
        ))
        }
      </Flex>
    </ul>
  );
}