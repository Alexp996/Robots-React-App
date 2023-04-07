import { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
  render() {
    const { search, placeholder, type, className } = this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type={type}
          placeholder={placeholder}
          onChange={search}
        />
      </div>
    );
  }
}

export default SearchBox;
