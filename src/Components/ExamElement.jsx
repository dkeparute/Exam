function ExamElement({ examElement, modal }) {



    const showEdit = () => {
        modal(examElement)
    }

    return (
        <div className='vienas-turtas'>
            <span>Name: </span>
            <div className='naujas-turtas'>
                <div>{examElement.name}</div>
            </div>
            <span>Type: </span>
            <div className='naujas-turtas'>
                <div>{examElement.type}</div>
            </div>
            <div className='naujas-turtas'>
                <span>Weight: </span>
                <div>{examElement.weight}</div>
            </div>
            <div className='naujas-turtas'>
                <span>Born: </span>
                <div>{examElement.born.slice(0, 10)}</div>
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    );

}
export default ExamElement;