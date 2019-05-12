import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import List from '../List/List';
import Style from './PaginatedList.style';


const PaginatedList = ({ data }) => {
  const perPage = 5;

  const [dataSubset, setDataSubset] = useState(data.slice(0, perPage));

  const handlePageClick = event => {
    const fisrtIndex = event.selected * perPage;
    const lastIndex = (event.selected + 1) * perPage < data.length ? (event.selected + 1) * perPage : data.length;

    setDataSubset(data.slice(fisrtIndex, lastIndex))
  };

  return (
    <Style.Container>
      <Style.Title>Actualités - {data.length} nouveaux articles (Liste paginée)</Style.Title>
      <Style.PaginatedListContainer>
        <List data={dataSubset} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(data.length / perPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={perPage}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </Style.PaginatedListContainer>
    </Style.Container>
  )
}

export default PaginatedList;
