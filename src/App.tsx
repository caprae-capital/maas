import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SellerQuestionnaire from './pages/SellerQuestionnaire';
import Dashboard from './pages/Dashboard';
import { useAuth } from './hooks/useAuth';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/seller-questionnaire"
            element={isAuthenticated ? <SellerQuestionnaire /> : <Navigate to="/login" />}
          />
          <Route
            path="/app/*"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={isAuthenticated ? <Navigate to="/app/dashboard" /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;