import React, { Component } from 'react';

class LxtrRenderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
                { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: true },
                { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", isActive: false },
                { id: 4, name: "Phạm Thị D", age: 19, gender: "Nữ", isActive: true },
                { id: 5, name: "Hoàng Văn E", age: 23, gender: "Nam", isActive: false }
            ],
        }
    }
    render() {
        return (
            <div>
                <h2> Danh sách sinh viên </h2>
                <hr />
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.isActive ? 'Hoạt động' : 'Khóa'}</td>
                                        <td>
                                            <button>Xem</button>
                                            <button>Sửa</button>
                                            <button>Xóa</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default LxtrRenderList;