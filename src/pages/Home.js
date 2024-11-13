import React from 'react';
import './Home.css';
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
// import data
import { List } from '../api/data.js';

const HomePage = () => {
  const searchBusiness = (term, location, sortBy) => {
    console.log("This is search criteria: " + term, location, sortBy);
  }

  return (
    <>
      <h1 id="title">ravenous</h1>
      <SearchBar searchBusiness={searchBusiness} />
      <BusinessList data={List} />
    </>
  )
}

export default HomePage;
