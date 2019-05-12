import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import List from '../List/List';
import Style from './InfiniteScrollList.style';


const InfiniteScrollList = ({ data }) => {
  const perPage = 10;

  const [dataSubset, setDataSubset] = useState(data.slice(0, perPage));
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadItems = page => {
    const fisrtIndex = page * perPage;
    let lastIndex;

    if ((page + 1) * perPage >= data.length) {
      setHasMoreItems(false);
      lastIndex = data.length;
    } else {
      lastIndex=(page + 1) * perPage
    }
    setDataSubset(dataSubset.concat(data.slice(fisrtIndex, lastIndex)))
  };

  return (
    <Style.Container>
      <Style.Title>Actualités - {data.length} nouveaux articles (List Infinite Scroll)</Style.Title>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadItems}
          hasMore={hasMoreItems}
          loader={<Style.LoadingIndicator>Loading ...</Style.LoadingIndicator>}
        >
            <List data={dataSubset} />
        </InfiniteScroll>
    </Style.Container>
  )
}

export default InfiniteScrollList;
