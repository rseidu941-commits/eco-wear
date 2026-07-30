import "./SearchBar.scss";

function SearchBar({ searchTerm = "", setSearchTerm = () => {} }) {
  return (
    <div className="searchbar">
      <span className="searchbar__icon">🔍</span>

      <input
        type="text"
        placeholder="Search..."
        className="searchbar__input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;