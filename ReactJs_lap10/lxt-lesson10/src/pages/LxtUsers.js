import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function LxtUsers() {
    // api
    const lxt_api = "https://68d3aebc214be68f8c66c8fc.mockapi.io/K22_Cnt1_lexuantoan_2210900069/user";

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect; []
    useEffect(() => {
        axios
            .get(lxt_api)
            .then((response) => {
                setUsers(response.data); // Lưu dữ liệu vào state
            })
            .catch((error) => {
                console.error("Có lỗi khi gọi API:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    if (loading) return <p>Đang tải dữ liệu...</p>;

    // render data
    let usersElement = users.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.fullname}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.status}</td>
                <td>
                    <Link to={`/users/edit/${item.id}`} className="btn btn-success">
                        Edit
                    </Link>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Danh sách users</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th> id </th>
                        <th> FullName </th>
                        <th> UserName </th>
                        <th> Password </th>
                        <th> Status </th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersElement}
                </tbody>
            </table>
            <a href='/users/add' className='btn btn-primary'>Thêm mới</a>

        </div>
    )
}