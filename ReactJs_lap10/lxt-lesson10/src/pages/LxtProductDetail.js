import React from 'react'
import { useParams } from 'react-router-dom'

export default function LxtProductDetail() {
    const { id } = useParams()

    return (
        <div className='bg-info'>
            <h2>Thông tin chi tiết sản phẩm</h2>
            <h3>Product Detail  - ID: {id}</h3>
        </div>
    )
}