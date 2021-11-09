function ExamStats({ stats }) {

    return (
        <div className='stats'>
            <span>Item count: {stats.count}</span>
            <span>Item weight: {stats.weight} kg</span>
            <span>Item average: {stats.average}</span>

        </div>
    )
}
export default ExamStats;