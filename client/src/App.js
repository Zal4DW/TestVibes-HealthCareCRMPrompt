import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate, // For redirecting
  Outlet // For nested routes/layouts
} from 'react-router-dom';

// Import Page Components
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DoctorDashboardPage from './pages/DoctorDashboardPage';
import StaffDashboardPage from './pages/StaffDashboardPage';
import PatientProfilePage from './pages/PatientProfilePage';
import AppointmentPage from './pages/AppointmentPage';
import MessagingPage from './pages/MessagingPage';
import BillingPage from './pages/BillingPage';
import InsurancePage from './pages/InsurancePage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

// Import Common Components
import Navigation from './components/Navigation'; // Using the new Navigation component
// import './App.css'; // We can create this later for App-specific styles

// Mock Auth Context (Simplified)
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  // Replace with actual authentication logic
  // Mock user roles: null (logged out), 'admin', 'doctor', 'staff'
  const [user, setUser] = React.useState({ role: 'admin', name: 'Mock Admin User' }); 

  const login = (role) => setUser({ role: role, name: `Mock ${role} User` });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Route Component
const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = React.useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Optional: redirect to a generic dashboard or an unauthorized page
    return <Navigate to="/" replace />; // Or an unauthorized page
  }
  return <Outlet />; // Renders the child route's element
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation /> {/* Using the Navigation component which uses <a> tags for now */}
          {/* Actual links for React Router should be <Link> components in Navigation.js */}
          
          <header className="App-header">
            {/* Content from previous App.js, can be removed or integrated into a HomePage component */}
            {/* <h1>Welcome to the Healthcare CRM</h1> */}
            {/* <p>More features coming soon!</p> */}
          </header>

          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Routes using a layout element (Outlet will render nested routes) */}
            <Route element={<ProtectedRoute allowedRoles={['admin', 'doctor', 'staff']} />}>
              <Route path="/" element={<HomePage />} /> {/* Default page after login */}
              <Route path="/patients/:patientId" element={<PatientProfilePage />} />
              <Route path="/appointments" element={<AppointmentPage />} />
              <Route path="/messaging" element={<MessagingPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>

            {/* Admin Specific Routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              {/* Add other admin-only routes for billing, insurance if they are admin-exclusive */}
              <Route path="/billing" element={<BillingPage />} /> 
              <Route path="/insurance" element={<InsurancePage />} />
            </Route>

            {/* Doctor Specific Routes */}
            <Route element={<ProtectedRoute allowedRoles={['doctor']} />}>
              <Route path="/doctor/dashboard" element={<DoctorDashboardPage />} />
              {/* Doctors might also access billing/insurance for their patients, adjust as needed */}
            </Route>

            {/* Staff Specific Routes */}
            <Route element={<ProtectedRoute allowedRoles={['staff']} />}>
              <Route path="/staff/dashboard" element={<StaffDashboardPage />} />
              {/* Staff typically handles billing, insurance, appointments */}
              {/* <Route path="/billing" element={<BillingPage />} /> already covered by admin, can be shared */}
              {/* <Route path="/insurance" element={<InsurancePage />} /> already covered by admin, can be shared */}
            </Route>

            {/* Fallback for unmatched routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

// Simple HomePage component
const HomePage = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Healthcare CRM</h1>
      {user && <p>You are logged in as: {user.name} ({user.role})</p>}
      <p>Please use the navigation above to access different sections of the application.</p>
      <p><em>Note: This is a conceptual application structure. Many features are placeholders.</em></p>
      <div>
        <h3>Quick Links (based on mock Admin role):</h3>
        <ul>
            <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
            <li><Link to="/patients/mockPatient123">View Sample Patient</Link></li>
            <li><Link to="/appointments">Manage Appointments</Link></li>
            <li><Link to="/billing">Billing</Link></li>
            <li><Link to="/reports">Reports</Link></li>
        </ul>
      </div>
    </div>
  );
};

// Simple NotFoundPage component
const NotFoundPage = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Go to Homepage</Link>
  </div>
);

export default App; 