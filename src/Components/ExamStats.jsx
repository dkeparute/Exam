function ExamStats({ stats, groupStats }) {

    return (
        <div className='stats'>
            <span>Item count: <i>{stats.count}</i></span>
            <span>Item weight: <i>{stats.weight.toFixed(2)}</i> kg</span>
            <span>Item average: <i>{stats.average.toPrecision(3)}</i> kg</span>
            {groupStats.map((s => <span key={s.type}><i>{s.type}: </i><b>{s.count}</b></span>))}

        </div>
    )
}
export default ExamStats;