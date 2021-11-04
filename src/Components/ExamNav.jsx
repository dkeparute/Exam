import { useState } from "react";

function ExamNav({types, setFilter}) {

const [filterValue, setFilterValue] = useState('');

const selectFilter = e => {
    setFilterValue(e.target.value);
    setFilter(e.target.value);
}


    return (
        <div className='nav'>
            <span>Filter by type: </span>
            <select onChange={selectFilter} value={filterValue}>
                {types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)}
                <option value="">Select </option>
            </select>
        </div>
    );
}
export default ExamNav;