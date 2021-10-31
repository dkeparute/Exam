import ExamElement from "./ExamElement";

function ExamList({ examList, modal }) {
    return (
        <div className='turtai-list'>
          <h2>All items </h2>
            {examList.map(examElement => <ExamElement key={examElement.id} examElement={examElement} modal={modal}></ExamElement>)}
        </div>
    );

}
export default ExamList;