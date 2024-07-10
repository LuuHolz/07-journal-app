import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage/> }/>
        <Route path="register" element={ <RegisterPage/> }/>

        {/* SI NO ESTOY EN LAS ANTERIORES RUTAS QUE ME LLEVE A: */}
        <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
    </Routes>
  )
}

export { AuthRoutes }