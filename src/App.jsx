import axios from "axios";
import { useEffect, useState } from "react";
import ExamList from "./Components/ExamList";
import ExamModal from "./Components/ExamModal";
import ExamNav from "./Components/ExamNav";
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

  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3003/exam')
      .then(res => {
        setExamList(res.data);
        console.log(res.data);
      })
  }, [lastUpdate])

  useEffect(() => {
    axios.get('http://localhost:3003/exam-type')
      .then(res => {
        setTypes(res.data);
        console.log(res.data);
      })
  }, [lastUpdate])

  useEffect(() => {
    if (filter) {
      axios.get('http://localhost:3003/exam-filter/' + filter)
        .then(res => {
          setExamList(res.data);
          console.log(res.data);
        })
    }
  }, [filter])

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
    setShowModal(false);
    axios.put('http://localhost:3003/exam/' + id, examElement)
      .then(res => {
        setLastUpdate(Date.now())
        console.log(res.data);
      })
  }

  const remove = (id) => {
    setShowModal(false);
    axios.delete('http://localhost:3003/exam/' + id)
      .then(res => {
        setLastUpdate(Date.now())
        console.log(res.data);
      })
  }

  return (
    <div className='turtai'>
      <ExamNew create={create} />
      <ExamList examList={examList} modal={modal} />
      <ExamModal showModal={showModal} hide={hide} modalElement={modalElement} edit={edit} remove={remove} />
      <ExamNav types={types} setFilter={setFilter} />
    </div>
  );
}
export default App;