import ExamElement from "./ExamElement";

function ExamList({ examList, modal }) {
    return (
        <div className='turtai-list'>
            {examList.map(examElement => <ExamElement key={examElement.id} examElement={examElement} modal={modal}></ExamElement>)}
        </div>
    );

}
export default ExamList;