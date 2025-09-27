import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LxtCategories() {
    // API categories
    const lxt_api =
        "http://apixm.devmaster.vn/api/Categories";

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from API
    useEffect(() => {
        axios
            .get(lxt_api)
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Có lỗi khi gọi API:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading)
        return <p className="text-center text-muted">Đang tải dữ liệu...</p>;

    // Render category rows
    const categoryElements = categories.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>
                    <img
                        src={item.icon || "https://via.placeholder.com/40"}
                        alt={item.title}
                        style={{ width: "40px", height: "40px" }}
                    />
                </td>
                <td>{item.title}</td>
                <td>{item.slug}</td>
                <td>{item.status === 1 ? "Hiển thị" : "Ẩn"}</td>
                <td>
                    <Link
                        to={`/categories/detail/${item.id}`}
                        className="btn btn-sm btn-info me-2"
                    >
                        Xem
                    </Link>
                    <Link
                        to={`/categories/edit/${item.id}`}
                        className="btn btn-sm btn-success me-2"
                    >
                        Sửa
                    </Link>
                    <button className="btn btn-sm btn-danger">Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary mb-3">Danh sách Danh mục Nội thất</h2>
            <hr />
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Icon</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{categoryElements}</tbody>
            </table>
            <div className="text-end">
                <a href="/categories/add" className="btn btn-primary">
                    ➕ Thêm mới
                </a>
            </div>
        </div>
    );
}
