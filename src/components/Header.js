import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, profile, search }) {
  const [searchInput, setSearchInput] = useState(false);

  const handleSearchClick = () => {
    setSearchInput(!searchInput);
  };

  return (
    <header>
      {profile && (
        <Link to="/profile">
          <input
            type="image"
            src={ profileIcon }
            alt=""
            data-testid="profile-top-btn"
          />
        </Link>)}
      {search && <input
        type="image"
        src={ searchIcon }
        alt=""
        data-testid="search-top-btn"
        onClick={ handleSearchClick }
      />}
      {searchInput && (
        <label htmlFor="search-input">
          Search Bar
          <input
            data-testid="search-input"
            id="search-input"
          />
        </label>)}
      <h1
        data-testid="page-title"
      >
        {title}
      </h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
