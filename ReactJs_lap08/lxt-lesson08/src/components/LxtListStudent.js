import React, { useState } from 'react'
import LxtFormStudent from './LxtFormStudent';

export default function LxtListStudent() {
    // mock data
    const studentsInit = [
        { id: 1, name: "Nguyễn Văn A", age: 20 },
        { id: 2, name: "Trần Thị B", age: 21 },
        { id: 3, name: "Lê Văn C", age: 19 },
        { id: 4, name: "Phạm Thị D", age: 22 },
        { id: 5, name: "Hoàng Văn E", age: 20 }
    ];
    // state
    const [students, setStudent] = useState(studentsInit)

    // add
    const handleSubmit = (param) => {
        console.log("param:", param);

        const newStudents = [...students, param];
        setStudent(newStudents)


    }

    return (
        <div>
            <h2>DANH SÁCH SINH VIÊN</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((stud, index) => {
                            return (
                                <tr>
                                    <td>{stud.id}</td>
                                    <td>{stud.name}</td>
                                    <td>{stud.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <LxtFormStudent onSubmit={handleSubmit} />
        </div>
    )
}