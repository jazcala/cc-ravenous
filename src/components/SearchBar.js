import "./SearchBar.css";
import { useState } from "react";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchBusiness }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [filterBy, setFilterBy] = useState("best_match");

  const onChangeName = ({ target }) => {
    setName(target.value)
  }

  const onChangeLocation = ({ target }) => {
    setLocation(target.value)
  }

  const cleanFilters = () => {
    const filters = document.querySelectorAll(".filters li");
    filters.forEach(elem => elem.className = "")
  }

  const handleSortByChange = ({ target }) => {
    if (target.className === "") {
      cleanFilters();
      setFilterBy(target.getAttribute('name'));
      target.className += "active";
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    searchBusiness(name, location, filterBy);
  }

  const handleActiveClass = (sortByOptionValue) => {
    if (filterBy === sortByOptionValue) {
      return "active";
    }
    return "";
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
        key={sortByOptionValue}
        onClick={handleSortByChange}
        name={sortByOptionValue}
        className={handleActiveClass(sortByOptionValue)}>{sortByOption}</li>
    });
  };

  return (
    <section id="search-bar">
      <ul className='filters'>
        {renderSortByOptions()}
      </ul>
      <form onSubmit={handleSearch}>
        <div className='inputs' >
          <input className="search-input"
            type='text'
            name='search-by-name'
            value={name}
            onChange={onChangeName}
            placeholder='Search Businesses' />
          <input className="search-input"
            type='text'
            name="search-by-location"
            value={location}
            onChange={onChangeLocation}
            placeholder='Where?' />
        </div>
        <button className='search-button' type="submin" name="search-button">Let's Go</button>
      </form>
    </section >
  )
}

export default SearchBar;
