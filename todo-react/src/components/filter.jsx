const Filter = ({ filter, onChangeFilter }) => {
    return (
      <div className="filter">
        <label>Status Filter :  </label>
        <select value={filter} onChange={(e) => onChangeFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
    );
  };

  export default Filter;