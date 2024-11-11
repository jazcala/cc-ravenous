import './SearchBar.css';

const SearchBar = () => {

  return (
    <section id="search-bar">
      <div>
        <input className="search-input" type='text' name='search-by-name' placeholder='Search Businesses' />
        <input className="search-input" type='text' name="search-by-location" placeholder='Where?' />
      </div>
      <button className='search-button' type="submin" name="search-button">Let's Go</button>
    </section>
  )
}

export default SearchBar;
