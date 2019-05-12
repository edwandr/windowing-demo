import React from 'react';

import Style from './List.style';

const List = ({ data }) => (
  <table>
    <thead>
        <tr>
          <Style.Header>Index</Style.Header>
          <Style.Header>Article</Style.Header>
          <Style.Header>Author</Style.Header>
          <Style.Header>Picture</Style.Header>
          <Style.Header>Publication date</Style.Header>
        </tr>
    </thead>
    <tbody>
    {data.map((article) => (
      <tr key={article.index + article.author}>
        <Style.Index>{article.index}</Style.Index>
        <Style.Name>{article.name}</Style.Name>
        <Style.Author>{article.author}</Style.Author>
        <Style.Image><img alt={article.name} src={article.image} /></Style.Image>
        <Style.Date>{article.date}</Style.Date>
      </tr>
    ))}
    </tbody>
  </table>
);

export default List;
