import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LXT_API } from "../api";

export default function LxtCategoryList() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Gọi API
    useEffect(() => {
        axios
            .get(LXT_API)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.error("Lỗi khi gọi API:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center">Đang tải dữ liệu...</p>;

    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary mb-3">
                Danh mục sản phẩm nội thất
            </h2>
            <div className="row">
                {categories.map((cat) => (
                    <div className="col-md-3 mb-4" key={cat.id}>
                        <div className="card shadow-sm">
                            <img
                                src={cat.icon || "https://via.placeholder.com/150"}
                                className="card-img-top"
                                alt={cat.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{cat.title}</h5>
                                <p className="card-text">{cat.metaKeyword}</p>
                                <Link
                                    to={`/category/${cat.id}`}
                                    className="btn btn-sm btn-outline-primary"
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
