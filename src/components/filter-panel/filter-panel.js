import "./filter-panel.scss";

const FilterPanel = ({ handleFilter, activeButton }) => {
  const buttonsData = [
    { name: "All", label: "All" },
    { name: "Brazil", label: "Brazil" },
    { name: "Kenya", label: "Kenya" },
    { name: "Columbia", label: "Columbia" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = activeButton === name;
    const clazz = active ? "filter-panel__button_active" : null;
    return (
      <button
        onClick={() => handleFilter(name)}
        key={name}
        type="button"
        className={`filter-panel__button ${clazz}`}
      >
        {label}
      </button>
    );
  });
  return (
    <div className="filter-panel">
      <div className="filter-panel__label">Or filter</div>
      <div className="filter-panel__button-bar">{buttons}</div>
    </div>
  );
};

export default FilterPanel;
