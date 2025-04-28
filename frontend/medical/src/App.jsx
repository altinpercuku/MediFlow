import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/home/Home';
import DashboardPage from "./components/dashboard/DashboardPage";
import DoctorsPage from "./components/dashboard/DoctorsPage";
import PanelLogin from "./components/dashboard/PanelLogin";
import PrivateRoute from './components/dashboard/PrivateRoute'

function App() {
  return (
    <div>
      <Routes>  {/* You don't need another BrowserRouter here */}
        <Route path='' element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/panel/login" element={<PanelLogin />} />
        {/* Protected Admin Routes */}
        <Route
          path="/panel/doctors"
          element={
            <PrivateRoute>
              <DoctorsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/panel/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;