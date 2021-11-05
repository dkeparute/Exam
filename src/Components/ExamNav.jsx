import { useState } from "react";

function ExamNav({ types, filter, reset}) {

    const [filterValue, setFilterValue] = useState('');
    

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

     const resetHandler = () => {
        reset();
        setFilterValue('');
    }


    return (
        <div className='nav'>
            <span>Filter by type: </span>
            <select onChange={selectFilter} value={filterValue}>
                {types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)}
                <option value="">Select </option>
            </select>
              <button onClick={resetHandler}>Reset</button>
        </div>

    );
}
export default ExamNav;