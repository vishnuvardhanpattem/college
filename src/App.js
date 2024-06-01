
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AdmissionModule from './components/Teacher/AdmissionModule';
import Home from './components/Home';
import Student from './components/Student/Student';
import TeacherLogin from './components/TeacherLogin';
import TeacherSignup from './components/TeacherSignup';
import TeacherMain from './components/TeacherMain';
function App() {
  return (
    <div  >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teacher' element={<AdmissionModule />}/>
          <Route path='/student' element={<Student /> } />
          <Route path='/teacherlogin' element={<TeacherLogin/>}/>
          <Route path='/teachersignup' element={<TeacherSignup/>}/>
          <Route path="/teachermain" element={<TeacherMain/>}/>
        </Routes>
    </div>
  );
}

export default App;
