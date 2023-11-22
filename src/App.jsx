import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import DashboardMain from "./screens/DashboardMain";
import Borrow from "./screens/Borrow";
import BookInfo from "./screens/BookInfo";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard/*" element={<DashboardMain />} />
      <Route path="/borrow" element={<Borrow />} />
      <Route path="/borrow/:id" element={<BookInfo />} />
    </Routes>
  )
}

export default App
