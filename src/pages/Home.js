import React from 'react';
import './Home.css';
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
// import data
import { List } from '../api/data.js';

const HomePage = () => {

  return (
    <>
      <h1 id="title">ravenous</h1>
      <SearchBar />
      <BusinessList data={List} />
    </>
  )
}

export default HomePage;
