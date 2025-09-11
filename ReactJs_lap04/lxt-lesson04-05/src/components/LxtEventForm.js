import React, { useState } from "react";

function LxtEventForm() {
    // Khởi tạo state để lưu dữ liệu form
    const [formData, setFormData] = useState({
        hoTen: "",
        email: "",
        gioiTinh: "Nam",
        soThich: false,
    });

    // Xử lý sự kiện thay đổi input
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    // Xử lý submit form
    function handleSubmit(e) {
        e.preventDefault();
        alert(
            `Thông tin bạn nhập:\nHọ tên: ${formData.hoTen}\nEmail: ${formData.email}\nGiới tính: ${formData.gioiTinh}\nSở thích: ${formData.soThich ? "Lập trình" : "Khác"}`
        );
    }

    // Xử lý event click riêng
    function handleClick() {
        alert("Bạn vừa nhấn nút kiểm tra sự kiện!");
    }

    return (
        <div style={{ width: "400px", margin: "20px auto", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center" }}> Demo Event & Form</h2>

            {/* Form nhập liệu */}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Họ tên: </label>
                    <input
                        type="text"
                        name="hoTen"
                        value={formData.hoTen}
                        onChange={handleChange}
                        placeholder="Nhập họ tên"
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Nhập email"
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Giới tính: </label>
                    <select name="gioiTinh" value={formData.gioiTinh} onChange={handleChange}>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>
                        <input
                            type="checkbox"
                            name="soThich"
                            checked={formData.soThich}
                            onChange={handleChange}
                        />
                        Yêu thích lập trình
                    </label>
                </div>

                <button type="submit">Gửi Form</button>
            </form>

            {/* Event click */}
            <hr />
            <button onClick={handleClick} style={{ marginTop: "10px" }}>
                Nhấn để kiểm tra sự kiện
            </button>
        </div>
    );
}

export default LxtEventForm;
