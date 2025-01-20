import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileList from "./Components/ProfileList.jsx";
import { ProfileDetails } from "./Components/Profile.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import { store } from "./Store.js";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<ProfileList />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
