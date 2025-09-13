import React from 'react'

export default function LxtEventComp() {

    const lxt_Func1 = () => {
        alert("Xin chào")
    }
    const lxt_Func2 = (param) => {
        alert(param)
    }
    return (
        <div>
            <h1>Event - Component Function</h1>
            <button onClick={lxt_Func1}>Click Here</button>

            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={lxt_Func1()}>Click Here</button>ss */}

            {/* gọi hàm có tham số */}
            <button onClick={() => lxt_Func2('Toan Le')}>Click Here Param</button>

        </div>
    )
}