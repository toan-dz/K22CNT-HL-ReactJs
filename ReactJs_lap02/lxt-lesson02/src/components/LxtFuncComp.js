import React from 'react'

export default function LxtFuncComp(tvcProps) {
    return (
        <div className='alert alert-danger'>
            <h2>Function Component Demo</h2>
            <h3>Welcome to, {tvcProps.name} - {tvcProps.age}</h3>
        </div>
    )
}