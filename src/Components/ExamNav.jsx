function ExamNav({types}) {
    return (
        <div className='nav'>
            <span>Filter by type: </span>
            <select>
                {types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)}
                <option value="">Select </option>
            </select>
        </div>
    );
}
export default ExamNav;