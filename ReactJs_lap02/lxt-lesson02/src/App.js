import './App.css';
import LxtClassComp from './components/LxtClassComp';
import LxtFuncComp from './components/LxtFuncComp';
import LxtJsxExpression from './components/LxtJsxExpression';

function App() {
  return (
    <div className="container border">
      <h1>Làm việc với các thành phần cơ bản trong ReactJs</h1>
      <hr />
      <LxtJsxExpression />

      <LxtFuncComp />
      <LxtFuncComp name="Le Xuan Toan" age="21"></LxtFuncComp>

      <LxtClassComp ></LxtClassComp>
      <LxtClassComp fullName="Chung Trinh Van" company="FitNTU" />
      <LxtClassComp fullName="Le Xuan Toan" company="K22CNT2" />
    </div>
  );
}

export default App;