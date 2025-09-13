import React, { Component } from 'react';

class LxtEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            age: 0,
            course: 'ReactJS'
        };
    }

    handleChange = (event) => {
        let name = event.target.name;
        let val = name === "age" ? Number(event.target.value) : event.target.value;

        this.setState({
            [name]: val
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Name: " + this.state.studentName + "\nAge: " + this.state.age + "\nCourse: " + this.state.course);
    };

    render() {
        return (
            <div className='alert alert-info'>
                <h1>Event Form - Tổng hợp</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='studentName'>Student Name:</label>
                        <input
                            name='studentName'
                            value={this.state.studentName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='age'>Student Age:</label>
                        <input
                            type="number"
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='course'>Course:</label>
                        <select name='course' value={this.state.course} onChange={this.handleChange}>
                            <option value='HTML5'>HTML5</option>
                            <option value='ReactJS'>ReactJS</option>
                            <option value='PHP'>PHP</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default LxtEventForm2;
