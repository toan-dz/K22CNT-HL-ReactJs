import React from 'react'

export default function LxtFuncComp(props) {
    return (
        <div>
            <h2>Demo Function Component</h2>
            <div>
                <h3> Nội dung đọc từ props </h3>
                <p> Welcome to, {props.fullName} </p>
                <p> Địa chỉ: {props.address}</p>
            </div>
        </div>
    )
}