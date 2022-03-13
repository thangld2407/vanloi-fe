import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/scss/app.scss';
import MainLayout from './layouts';
import Login from './pages/Auth/login';
import TimeSheet from './pages/Time';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="request" element={<TimeSheet />} />
        <Route path="plan" element={<TimeSheet />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
