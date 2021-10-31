import axios from "axios";
import { useEffect, useState } from "react";
import ExamList from "./Components/ExamList";
import ExamModal from "./Components/ExamModal";
import ExamNew from "./Components/ExamNew";

function App() {

  const [examList, setExamList] = useState([]);

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [showModal, setShowModal] = useState(false);

  const [modalElement, setModalElement] = useState({
    name: '',
    type: '',
    weight: '',
    born: ''
  });

  useEffect(() => {
    axios.get('http://localhost:3003/exam')
      .then(res => {
        setExamList(res.data);
        console.log(res.data);
      })
  }, [lastUpdate])

  const create = examElement => {
    axios.post('http://localhost:3003/exam', examElement)
      .then(res => {
        setLastUpdate(Date.now())
        console.log(res.data);
      })
  }

  const modal = (examElement) => {
    setShowModal(true);
    setModalElement(examElement);
  }

  const hide = () => {
    setShowModal(false);
  }

  const edit = (examElement, id) => {
    axios.put('http://localhost:3003/exam'+id, examElement)
    .then(res => {
      setLastUpdate(Date.now())
      console.log(res.data);
    })
  }

  return (
    <div className='turtai'>
      <ExamNew create={create} />
      <ExamList examList={examList} modal={modal} />
      <ExamModal showModal={showModal} hide={hide} modalElement={modalElement} edit={edit} />
    </div>
  );
}
export default App;