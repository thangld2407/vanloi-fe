import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/scss/app.scss';
import MainLayout from './layouts';
import Level from './pages/Account';
import Login from './pages/Auth/login';
import TimeSheet from './pages/TimeSheet';
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<MainLayout />}></Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="timesheet" element={<TimeSheet />} />
        <Route path="account" element={<Level />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
