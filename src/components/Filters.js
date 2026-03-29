const Filters = ({ onCategoryChange }) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="filters">
      <h3>Filters</h3>

      {categories.map((cat) => (
        <label key={cat}>
          <input
            type="checkbox"
            onChange={() => onCategoryChange(cat)}
          />
          {cat}
        </label>
      ))}
    </div>
  );
};

export default Filters;