import {Route, Routes, useNavigate, Link, Navigate} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/sign-in/Sign-In";
import SignUp from "./pages/auth/sign-up/Sign-Up";
import { ActivateAccount } from "./pages/auth/activate-account/ActivateAccount";
import Dashboard from "./pages/backend/Dashboard";
import { AccountContext } from "./setup/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { ForgotPassword } from "./pages/auth/forgot-password/ForgotPassword";
import { Landing } from "./pages/frontend/landing/Landing";
import { Homepage } from "./pages/frontend/homepage/Homepage";
import { Logout } from "./pages/auth/logout/Logout";
import { LoadingMain } from "./common/components/loading-main-page/LoadingMain";
import { ModualPop } from "./common/components/module-pop/ModualPop";
import { SetupWizzard } from "./pages/frontend/setupWizzard/SetupWizzard";
import Test from "./pages/backend/test/Test";
import SelectHouses from "./pages/backend/selectHouses/selectHouses";
const App = () => {
  const {isSignInComplete, isLogoutEnabled, getUser, isAuthenticated, isLoading, logout, getSession, setIsSignUpInComplete} = useContext(AccountContext);
  const [contentLoader, setContentLoader] = useState(true);
  
  useEffect(() => {
    if(isAuthenticated) {
      const data = getUser();
      if(data !== null) {
        const signUpStatus = data?.attributes["custom:signup_status"];
        if(signUpStatus === "0") {
          setIsSignUpInComplete(true);
        }
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    window.addEventListener('load', () => {
      setContentLoader(false);
    });
  }, []);
  
  return (
    !contentLoader && !isLoading ? <div className="slow-animate-pop-loading">
      <Logout/>
      {/* <ModualPop show={isSignInComplete} child={<SetupWizzard />}/> */}
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
          <Route path="test" element={<Test/>}/>
          <Route path="selectHouses" element={<SelectHouses/>}/>
        </Route>

        <Route path="/" element={<Landing/>}>
          <Route index element={<Homepage />}></Route>
          <Route path="logout"/>
        </Route>
      </Routes>
    </div> : <LoadingMain />
  )
}

export default App;