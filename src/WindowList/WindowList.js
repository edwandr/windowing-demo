import React from 'react';
import { Table, Column } from 'react-virtualized'
import 'react-virtualized/styles.css'

import Style from './WindowList.style';

const headerRenderer = ({
  columnData,
  dataKey,
  disableSort,
  label,
  sortBy,
  sortDirection
}) => (
  <Style.Header>{label}</Style.Header>
)

const WindowList = ({ data }) => (
  <Style.Container>
    <Style.Title>Actualités - {data.length} nouveaux articles (React Virtualized)</Style.Title>
      <Table
        width={1215}
        height={700}
        headerHeight={40}
        rowHeight={90}
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
      >
        <Column
          label='Index'
          dataKey='index'
          headerRenderer={headerRenderer}
          width={80}
        />
        <Column
          label='Article'
          dataKey='name'
          headerRenderer={headerRenderer}
          width={540}
        />
        <Column
          label='Author'
          dataKey='author'
          headerRenderer={headerRenderer}
          width={240}
        />
        <Column
          label='Picture'
          dataKey='image'
          width={90}
          headerRenderer={headerRenderer}
          cellRenderer={({cellData}) => <img alt={'hey'} src={cellData} />}
        />
        <Column
          label='Publication date'
          dataKey='date'
          headerRenderer={headerRenderer}
          width={200}
        />
      </Table>
  </ Style.Container>
);

export default WindowList;
