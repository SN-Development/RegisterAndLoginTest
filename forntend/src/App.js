
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import SuccessfulTik from './component/successful_tik/SuccessfulTik';
import Appoiintment from './component/appointment/Appoiintment';


function App() {
  return (
    <div className="App">
       {/* <RegisterPage></RegisterPage> */}
       {/* <Loginpage></Loginpage> */}
      <Routes>
        <Route path='/' element={<Loginpage></Loginpage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/home'  element={<HomePage></HomePage>}></Route>
      </Routes>
      {/* <SuccessfulTik></SuccessfulTik> */}
      {/* <Appoiintment></Appoiintment> */}
    </div>
  );
}

export default App;
