import {Route, Routes, useNavigate, Link} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/sign-in/Sign-In";
import SignUp from "./pages/auth/sign-up/Sign-Up";
import { ActivateAccount } from "./pages/auth/activate-account/ActivateAccount";
import { useEffect, useContext } from "react";
import { AccountContext } from "./setup/contexts/AuthContext";

const App = () => {
  const {getUser, isAuthenticated, isLoading, logout} = useContext(AccountContext);
  
  useEffect(() => {
    if(!isLoading && isAuthenticated) {
      //logout(false);
      const data = getUser();
      if(data !== null) {
        const signUpStatus = data?.attributes["custom:sign_up_status"];
        const group = data?.signInUserSession.accessToken.payload['cognito:groups'][0];
        // if(signUpStatus === "pending" && group !== "Admin") {
        //   setPopModal(true);
        //   navigate("/finialize-details");
        // }

        // if(signUpStatus === "Complete") {
        //   getUserProfile();
        // }
      } else {
        logout(true);
      }
    
      
      //getData();
      //handleClick();
    }
  }, [isAuthenticated, isLoading, getUser]);
  
  return (
    <>
    <Routes>
      <Route path="*" element={<h1>Error 404 sirjak</h1>}></Route>

      <Route path="/auth" element={<Auth />}>
        <Route index element={<SignIn/>} />
        <Route path="sign-up">
          <Route index element={<SignUp/>}/>
          <Route path="activate" element={<ActivateAccount/>}/>
        </Route>
      </Route>

      
      <Route path="/" element={<Link to="/auth">Auth</Link>} />
    </Routes>
    </>
  )
}

export default App;