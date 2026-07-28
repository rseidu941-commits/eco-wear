import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="searchbar">
      <span className="searchbar__icon">🔍</span>

      <input
        type="text"
        placeholder="Search..."
        className="searchbar__input"
      />
    </div>
  );
}

export default SearchBar;