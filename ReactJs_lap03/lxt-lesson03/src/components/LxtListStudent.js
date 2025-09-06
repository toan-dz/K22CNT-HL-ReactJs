import React, { Component } from 'react';

class LxtListStudent extends Component {
    render() {
        let { students } = this.props;
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
                            students.map((student, index) => {
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

export default LxtListStudent;