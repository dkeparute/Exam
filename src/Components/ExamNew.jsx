import { useState } from "react";

function ExamNew({ create }) {

    const [inputs, setInputs] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    })
    const control = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        create(inputs);
        setInputs({
            name: '',
            type: '',
            weight: '',
            born: ''
        })
    }

    return (
        <div className='inputs-turtas'>
            <h2>Add new items: </h2>
            <div className='inputs'>
                <span>New name: </span> <input type="text" value={inputs.name} onChange={(e) => control(e, 'name')} placeholder="insert name" />
            </div>
            <div className='inputs'>
                <span>New type: </span> <input type="text" value={inputs.type} onChange={(e) => control(e, 'type')} placeholder="insert type" />
            </div>
            <div className='inputs'>
                <span>New weight: </span> <input type="text" value={inputs.weight} onChange={(e) => control(e, 'weight')} placeholder="insert weight" />
            </div>
            <div className='inputs'>
                <span>New born: </span> <input type="date" value={inputs.born} onChange={(e) => control(e, 'born')} />
            </div>
            <button onClick={handleCreate}>Add</button>
        </div>
    );
}
export default ExamNew;