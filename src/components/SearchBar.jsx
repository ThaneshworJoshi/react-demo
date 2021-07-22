import React from 'react';

const SearchBar = ({ handleChange, handleClick, search }) => {
  return (
    <div>
      <div className='card-search'>
        <div className='card-search-box'>
          <div className='card-search-input'>
            <input
              type='text'
              name='search'
              id='search-box'
              placeholder='Search'
              onChange={handleChange}
              value={search}
            />
          </div>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
