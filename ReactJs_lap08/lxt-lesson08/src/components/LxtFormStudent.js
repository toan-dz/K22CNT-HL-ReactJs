import React, { useState } from 'react'

export default function LxtFormStudent({ onSubmit }) {
    // state
    const [id, setId] = useState(0)
    const [name, setName] = useState('Chung chung')
    const [age, setAge] = useState(0)


    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        let obj = {
            id: id,
            name: name,
            age: age
        }
        onSubmit(obj);
    }
    return (
        <div>
            <form>
                <h3>Thêm thông tin</h3>
                <p>id:
                    <input name='id' value={id} onChange={(ev) => setId(ev.target.value)} /> </p>
                <p>name:
                    <input name='name' value={name} onChange={(ev) => setName(ev.target.value)} /> </p>
                <p>age:
                    <input name='age' value={age} onChange={(ev) => setAge(ev.target.value)} /> </p>

                <button onClick={handleSubmit}>Ghi lại</button>
            </form>
        </div>
    )
}