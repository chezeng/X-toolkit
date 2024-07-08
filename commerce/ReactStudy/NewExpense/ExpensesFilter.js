

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const returnValue = (event) => {
      props.filterOne(event.target.value);
    };

  return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.formerOne} onChange={returnValue}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='Select A Year'>Select A Year </option>
          </select>
        </div>
      </div>
  );
};

export default ExpensesFilter;