import React, { Component } from 'react';

class LxtEventCompClass extends Component {

    lxt_Func1 = () => {
        alert("Hàm không có tham số")
    }

    lxt_Func2 = (param) => {
        alert("Hàm có tham số:\n" + param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.lxt_Func1}>Click</button>
                <button onClick={() => this.lxt_Func2("Lê Xuân Toàn")}>Click Param</button>
            </div>
        );
    }
}

export default LxtEventCompClass;