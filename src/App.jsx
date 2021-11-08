import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ExamList from "./Components/ExamList";
import ExamModal from "./Components/ExamModal";
import ExamNav from "./Components/ExamNav";
import ExamNew from "./Components/ExamNew";
import examSort from "./Common/examSort";

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
  const [filterBy, setFilterBy] = useState('');
  const [searchBy, setSearchBy] = useState('');
  // const [sortBy, setSortBy] = useState(' ');
  
  const sortBy = useRef('');

  // veikiantis sortas
  const sort = (by) => {
    setExamList(examSort(examList, by))
    sortBy.current = by;
  }

  useEffect(() => {
    if (searchBy) {
      axios.get('http://localhost:3003/exam-name/?s=' + searchBy)
        .then(res => {
          setExamList(examSort((res.data), sortBy.current));
          console.log(res.data);
        })
    }
  }, [searchBy])

  useEffect(() => {
    if (filterBy) {
      axios.get('http://localhost:3003/exam-filter/' + filterBy)
        .then(res => {
          setExamList(examSort((res.data), sortBy.current));
          console.log(res.data);
        })
    }
  }, [filterBy])
  useEffect(() => {
    axios.get('http://localhost:3003/exam-type')
      .then(res => {
        setTypes(res.data);
        console.log(res.data);
      })
  }, [lastUpdate])
  const reset = () => {
    setLastUpdate(Date.now());
  }
  // veikiantis sortas
  useEffect(() => {
    axios.get('http://localhost:3003/exam')
      .then(res => {
        setExamList(examSort((res.data), sortBy.current));
      })
  }, [lastUpdate])

  const create = examElement => {
    axios.post('http://localhost:3003/exam', examElement)
      .then(res => {
        setLastUpdate(Date.now());
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
      <ExamNav sort={sort} types={types} filter={setFilterBy} reset={reset} search={setSearchBy} />
    </div>
  );
}
export default App;