import React, { useContext } from 'react'
import { ThemeContext } from './LxtExampleContext'

export default function LxtExamInfo() {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <h2>Nội dung có áp dụng useContext</h2>
            <p className={theme}>
                useContext() là một React Hook cho phép bạn truy cập giá trị từ Context trong component mà không cần truyền props qua nhiều cấp (props drilling).
                Nó giúp quản lý dữ liệu dùng chung (như theme, ngôn ngữ, user info, settings, v.v.) trong toàn bộ ứng dụng.
            </p>
        </div>
    )
}