import React, {useState} from 'react';
import randomQuotes from "random-quotes";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import RegularList from './RegularList/RegularList';
import PaginatedList from './PaginatedList/PaginatedList';
import InfiniteScrollList from './InfiniteScrollList/InfiniteScrollList'
import WindowList from './WindowList/WindowList';
import './App.css';

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
}

function App() {
  const itemCount = 1000;
  const data = randomQuotes(itemCount).reduce((data, article, index) => {
    data.push({
      index: index,
      name: article.body,
      author: article.author,
      image: `https://source.unsplash.com/random/80x80?sig=${index}`,
      date: randomDate(new Date(2012, 0, 1), new Date()),
    })
    return data
  }, [])

  const [selectedTabIndex, setSelectedTabIndex] = useState(Number(localStorage.getItem('selectedTab')))

  const onTabSelect = (index: number, lastIndex: number, event: Event) => {
    localStorage.setItem('selectedTab', index);
    setSelectedTabIndex(index)
  }

  return (
    <div className="App">
      <Tabs onSelect={onTabSelect} selectedIndex={selectedTabIndex}>
        <TabList>
          <Tab>Classique</Tab>
          <Tab>Pagination</Tab>
          <Tab>Infinite Scroll</Tab>
          <Tab>Windowing</Tab>
        </TabList>
          <TabPanel>
            <RegularList data={data}/>
          </TabPanel>
          <TabPanel>
            <PaginatedList data={data} />
          </TabPanel>
          <TabPanel>
            <InfiniteScrollList data={data} />
          </TabPanel>
          <TabPanel>
            <WindowList data={data}/>
          </TabPanel>
      </Tabs>

    </div>
  );
}

export default App;
