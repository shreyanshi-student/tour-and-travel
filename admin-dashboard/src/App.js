import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/userlist";
import UserForm from "./pages/userform";
import Login from "./pages/login";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <Router basename="/admin">
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
<Route path="/users/add" element={<ProtectedRoute><UserForm /></ProtectedRoute>} />
<Route path="/users/edit/:id" element={<ProtectedRoute><UserForm /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
