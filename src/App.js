
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AdmissionModule from './components/Teacher/AdmissionModule';
import Home from './components/Home';
import Student from './components/Student/Student';

function App() {
  return (
    <div  >

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teacher' element={<AdmissionModule />} />
          <Route path='/student' element={<Student /> } />
        </Routes>
        

    </div>
  );
}

export default App;
