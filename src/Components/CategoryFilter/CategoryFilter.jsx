import "./CategoryFilter.scss";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ["Products", "Dresses", "Jewelry"];

  return (
    <nav className="category-filter">
      <ul className="category-filter__list">
        {categories.map((category) => {
          let buttonClass = "category-filter__button";

          if (selectedCategory === category) {
            buttonClass += " category-filter__button--active";
          }

          return (
            <li
              key={category}
              className="category-filter__item"
            >
              <button
                type="button"
                className={buttonClass}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CategoryFilter;