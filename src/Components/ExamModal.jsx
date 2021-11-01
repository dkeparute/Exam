import { useEffect, useState } from "react";

function ExamModal({ showModal, hide, modalElement, edit, remove}) {

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

    useEffect(() => {
        setInputs({
            name: modalElement.name,
            type: modalElement.type,
            weight: modalElement.weight,
            born: modalElement.born.slice(0, 10)
        })
    }, [modalElement])

    const handleEdit = () => {
        edit({
            name: inputs.name,
            type: inputs.type,
            weight: inputs.weight,
            born: inputs.born
        }, modalElement.id)
    }


    return (
        <div className='modal' style={{ display: showModal ? 'flex' : 'none' }}>
            <div className='nauja'>
                <div className='nauja-vel'>
                    <span>Edit name: </span> <input type="text" value={inputs.name} onChange={(e) => control(e, 'name')} />
                </div>
                <div className='nauja-vel'>
                    <span>Edit type: </span> <input type="text" value={inputs.type} onChange={(e) => control(e, 'type')} />
                </div>
                <div className='nauja-vel'>
                    <span>Edit weight: </span> <input type="text" value={inputs.weight} onChange={(e) => control(e, 'weight')} />
                </div>
                <div className='nauja-vel'>
                    <span>Edit born: </span> <input type="date" value={inputs.born} onChange={(e) => control(e, 'born')} />
                </div>
                <button onClick={handleEdit}>Save</button>
                <button onClick={hide}>Cancel</button>
                <button onClick={() => remove(modalElement.id)}>Delete</button>
            </div>
        </div>

    );
}
export default ExamModal;