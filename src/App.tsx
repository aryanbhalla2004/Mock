import {Route, Routes, useNavigate, Link, Navigate} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/sign-in/Sign-In";
import SignUp from "./pages/auth/sign-up/Sign-Up";
import { ActivateAccount } from "./pages/auth/activate-account/ActivateAccount";
import Dashboard from "./pages/backend/Dashboard";
import { AccountContext } from "./setup/contexts/AuthContext";
import { useContext, useEffect } from "react";
import { ForgotPassword } from "./pages/auth/forgot-password/ForgotPassword";
import { Landing } from "./pages/frontend/landing/Landing";
import { Homepage } from "./pages/frontend/homepage/Homepage";
import { Logout } from "./pages/auth/logout/Logout";

const App = () => {
  const {isLogoutEnabled, getUser, isAuthenticated, isLoading, logout, getSession} = useContext(AccountContext);

  useEffect(() => {
    if(isAuthenticated) {
      console.log(getUser());
    }
  }, [isAuthenticated]);
  
  return (
    <>
    <Logout/>

    <Routes>
      <Route path="*" element={<h1>Error 404</h1>}></Route>

      <Route path="/auth" element={!isAuthenticated ? <Auth /> : <Navigate to={"/"} />}>
        <Route index element={!isAuthenticated ? <SignIn/> : <Navigate to={"/"} />} />
        <Route path="sign-up">
          <Route index element={!isAuthenticated ? <SignUp/> : <Navigate to={"/"} />}/>
          <Route path="activate" element={<ActivateAccount/>}/>
        </Route>
        <Route path="forgot-password" element={!isAuthenticated ? <ForgotPassword /> : <Navigate to={"/"} />} />
      </Route>

      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to={"/"} />}>
      </Route>

      <Route path="/" element={<Landing/>}>
        <Route index element={<Homepage />}></Route>
        <Route path="logout" />
      </Route>
    </Routes>
    </>
  )
}

export default App;