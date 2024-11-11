import React from 'react';
import './Home.css';
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
// import data

const HomePage = () => {

  return (
    <>
      <h1 id="title">ravenous</h1>
      <SearchBar />
      <BusinessList />
    </>
  )
}

export default HomePage;
