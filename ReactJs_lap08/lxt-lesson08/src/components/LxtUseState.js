import React, { useState } from 'react'

export default function LxtUseState() {
    // Khai báo sử dụng hàm useState
    const [count, setCount] = useState(0) // Biến count có giá trị khởi tạo là 0

    // Hàm xử lý sự kiện Tăng / giảm
    const handleTang = () => {
        setCount(count + 1)
    }
    const handleGiam = () => {
        setCount(count - 1)
    }

    // Sử dụng với mảng
    const danh_sach = [1, 2, 5, 3]
    const [list, setList] = useState(danh_sach)

    const handleAddList = () => {
        // tạo số ngẫu nhiên từ 1 đến 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setList([...list, randomNumber]);
    }
    return (
        <div className='alert alert-danger'>
            <h2>Sử dụng hàm useState</h2>
            <p>Count: {count}</p>
            <button onClick={handleTang}>Tăng ++</button>
            <button onClick={handleGiam}>Giảm --</button>
            <hr />
            <h3>List: {list.toString()}</h3>
            <button onClick={handleAddList}>Add</button>
        </div>
    )
}