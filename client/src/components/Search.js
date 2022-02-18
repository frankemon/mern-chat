import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ list, setResults, field }) => {
  Search.propTypes = {
    list: PropTypes.array,
    setResults: PropTypes.any,
    field: PropTypes.any,
  };

  const [searchTerm, setSearchTerm] = useState('');

  const search = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = list.filter((value) => {
      if (term === '' || value[field].toLowerCase().includes(term.toLowerCase())) {
        return value;
      }
      return false;
    });
    setResults(results);
  };

  return (
    <div className="flex flex-col w-2/3 justify-center align-center">
      <div className="flex space-x-2 mt-5 bg-white rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black m-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          value={searchTerm}
          onChange={search}
          type="text"
          placeholder="Search..."
          className="text-black w-full rounded p-1"
        />
      </div>
    </div>
  );
};

export default Search;
