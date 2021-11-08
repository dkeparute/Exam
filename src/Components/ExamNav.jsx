import { useState } from "react";

function ExamNav({ types, filter, reset, search, sort}) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value);
        
    }

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
    }
    const handleSearchValue = e => {
        setSearchValue(e.target.value);
        search(e.target.value);
    }

    return (
        <div className='nav'>
            <span>Filter by type: </span>
            <select onChange={selectFilter} value={filterValue}>
                {types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)}
                <option value="">Select </option>
            </select>
            <div className='belekas'>
                <span>Sort by: </span>
                <select onChange={selectSort} value={sortValue} >
                    <option value="">Select </option>
                    <option value="name_asc">By name ASC </option>
                    <option value="name_desc">By name DESC </option>
                    <option value="weight_asc">By weight ASC </option>
                    <option value="weight_desc">By weight DESC </option>
                </select>
            </div>
            <div className='belekas'>
                <span>Search item by name: </span>
                <input onChange={handleSearchValue} value={searchValue} />
            </div>
            <button onClick={resetHandler}>Reset</button>
        </div>

    );
}
export default ExamNav;