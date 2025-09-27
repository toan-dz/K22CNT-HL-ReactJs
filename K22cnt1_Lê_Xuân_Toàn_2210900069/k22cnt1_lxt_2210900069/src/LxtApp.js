// src/LxtApp.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LxtNavBar from "./components/LxtNavBar";
import LxtCategoryList from "./components/LxtCategoryList";
// import LxtUsers from "./components/LxtUsers"; 
import LxtCategoryDetail from "./components/LxtCategoryDetail";

export default function LxtApp() {
  return (
    <Router>
      {/* Navbar */}
      <LxtNavBar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h2>Trang Chủ - Nội thất LXT</h2>} />

          {/* Sản phẩm = danh mục */}
          <Route path="/products" element={<LxtCategoryList />} />

          {/* Chi tiết danh mục */}
          <Route path="/category/:id" element={<LxtCategoryDetail />} />

          {/* Người dùng */}
          {/* <Route path="/users" element={<LxtUsers />} /> */}

          {/* Quản trị */}
          <Route path="/admin" element={<h2>Trang quản trị</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
