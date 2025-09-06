import React, { Component } from 'react';
import LxtFuncComp from './components/LxtFuncComp';
import LxtClassComp from './components/LxtClassComp';
import LxtrRenderList from './components/LxtrRenderList';
import LxtListStudent from './components/LxtListStudent';

class LxtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
        { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: true },
        { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", isActive: false },
        { id: 4, name: "Phạm Thị D", age: 19, gender: "Nữ", isActive: true },
        { id: 5, name: "Hoàng Văn E", age: 23, gender: "Nam", isActive: false }
      ],
    }
  }
  render() {
    return (
      <div className='container border'>
        <h1>Lê Xuân Toàn</h1>
        <h2>Ôn tập: conponent / props / state / Render ListKey</h2>
        <hr />
        <LxtFuncComp />
        <hr />
        <LxtFuncComp fullName="Lê Xuân Toàn" address="FitNTU" email="ltoan5861@gmail.com"></LxtFuncComp>

        <LxtClassComp />
        <LxtClassComp name="Lê Xuân Toàn" age="21" phone="012345678" email="ltoan5861@gmaill.com"></LxtClassComp>

        <hr />
        <LxtrRenderList />
        <hr />
        <LxtListStudent students={this.state.students} />
      </div>
    );
  }
}

export default LxtApp;