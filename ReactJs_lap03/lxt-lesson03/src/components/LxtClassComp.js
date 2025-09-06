import React, { Component } from 'react';

class LxtClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Toàn",
            lastName: "Lê",
            course: "ReactJs",
            marks: [
                { "toan": "10" },
                { "van": "9" },
                { "anh": "10" },
            ]
        }
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Demo Class Component</h2>
                <div>
                    <p>Đọc dữ liệu từ props</p>
                    <p>Name: {this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                    <p>Phone: {this.props.phone}</p>
                    <p>Email: {this.props.email}</p>
                </div>
                <div>
                    <h3>Đọc dữ liệu từ state </h3>
                    <p>FullName: {this.state.firstName} {this.state.lastName}</p>
                    <p>Course: {this.state.course}</p>
                    <p>Mark: {this.state.marks.toString()}</p>
                </div>
            </div>
        );
    }
}

export default LxtClassComp;