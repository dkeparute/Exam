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
        setSearchValue('');
        setSortValue('');
        sort('');
    }
    const handleSearchValue = e => {
        setSearchValue(e.target.value);
        search(e.target.value);
    }


    return (
        <div className='nav'>
            <span>Filter by type: </span>
            <select className='belekas' onChange={selectFilter} value={filterValue}>
                {types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)}
                <option value="">Select </option>
            </select>
            <div>
                <span>Sort by: </span>
                <select className='belekas' onChange={selectSort} value={sortValue} >
                    <option value="">Select </option>
                    <option value="name_asc">By name ASC </option>
                    <option value="name_desc">By name DESC </option>
                    <option value="weight_asc">By weight ASC </option>
                    <option value="weight_desc">By weight DESC </option>
                </select>
            </div>
            <div>
                <span>Search by name: </span>
                <input className='belekas' onChange={handleSearchValue} value={searchValue} placeholder="insert text"/>
            </div>
            <button onClick={resetHandler}>Reset</button>
        </div>

    );
}
export default ExamNav;