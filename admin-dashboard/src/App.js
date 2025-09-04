import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/userlist";
import UserForm from "./pages/userform";
import Login from "./pages/login";
import ProtectedRoute from "./components/protectedRoute";
import OfferList from './pages/offerlist';
import TeamList from "./pages/team";
import BlogList from './pages/bloglist';

import Addoffer from './pages/addoffer';
import Addteam from "./pages/addteam";
import Addblog from './pages/addblog'

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
        {/* <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} /> */}
        <Route path="/offers" element={<ProtectedRoute><OfferList /></ProtectedRoute>} />
        <Route path="/team" element={<ProtectedRoute><TeamList /></ProtectedRoute>} />
        <Route path="/blogs" element={<ProtectedRoute><BlogList /></ProtectedRoute>} />

        {/* <Route path="/users/add" element={<ProtectedRoute><UserForm /></ProtectedRoute>} />
        <Route path="/users/edit/:id" element={<ProtectedRoute><UserForm /></ProtectedRoute>} /> */}

        <Route path="/offer/add" element={<ProtectedRoute><Addoffer /></ProtectedRoute>} />
        <Route path="/offer/edit/:id" element={<ProtectedRoute><Addoffer /></ProtectedRoute>} />

        <Route path="/team/add" element={<ProtectedRoute><Addteam /></ProtectedRoute>} />
        <Route path="/team/edit/:id" element={<ProtectedRoute><Addteam /></ProtectedRoute>} />

        <Route path="/blog/add" element={<ProtectedRoute><Addblog /></ProtectedRoute>} />
        <Route path="/blog/edit/:id" element={<ProtectedRoute><Addblog /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
