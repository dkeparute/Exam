import axios from "axios";
import { useEffect, useState } from "react";
import ExamList from "./Components/ExamList";
import ExamNew from "./Components/ExamNew";

function App() {

  const [examList, setExamList] = useState([]);

  const [lastUpdate, setLastUpdate] = useState(Date.now());

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


  return (
    <div className='turtai'>
      <ExamNew create={create}/>
      <ExamList examList={examList} />
    </div>
  );
}
export default App;