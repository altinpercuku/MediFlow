import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/home/Home';
import AdminDashboard from './components/authentication/AdminDashboard'
import ClientHome from "./components/authentication/ClientHome"
import LoginPage from './components/authentication/LoginPage';
import RegisterAdmin from './components/authentication/RegisterAdmin';
import RegisterClient from './components/authentication/RegisterClient';

function App() {
  return (
    <div>
      <Routes>  {/* You don't need another BrowserRouter here */}
        <Route path='' element={<Home/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/client-home" element={<ClientHome />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;