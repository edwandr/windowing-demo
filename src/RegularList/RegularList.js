import React from 'react';

import List from '../List/List';
import Style from './RegularList.style';

const RegularList = ({ data }) => (
  <Style.Container>
    <Style.Title>Actualités - {data.length} nouveaux articles (Liste classique)</Style.Title>
      <List data={data} />
  </Style.Container>
);

export default RegularList;
