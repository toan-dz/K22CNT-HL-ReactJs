import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { LXT_API } from "../api";

export default function LxtCategoryDetail() {
    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get(`${LXT_API}/${id}`).then((res) => setCategory(res.data));
    }, [id]);

    if (!category) return <p className="text-center">Đang tải dữ liệu...</p>;

    return (
        <div className="container mt-4">
            <h2 className="text-primary">{category.title}</h2>
            <img
                src={category.icon || "https://via.placeholder.com/200"}
                alt={category.title}
                className="img-fluid mb-3"
            />
            <p><b>Mô tả:</b> {category.metaDescription}</p>
            <p><b>Slug:</b> {category.slug}</p>
            <Link to="/" className="btn btn-secondary">
                Quay lại danh mục
            </Link>
        </div>
    );
}
