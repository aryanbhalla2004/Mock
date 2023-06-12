import {Route, Routes, useNavigate, Link} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/sign-in/Sign-In";
import SignUp from "./pages/auth/sign-up/Sign-Up";
import { ActivateAccount } from "./pages/auth/activate-account/ActivateAccount";
<<<<<<< HEAD
import { useEffect, useContext } from "react";
import { AccountContext } from "./setup/contexts/AuthContext";
||||||| a5eb1b8
=======
import Dashboard from "./pages/backend/Dashboard";
>>>>>>> a3ceb4a70cc9288deb73da18c4ed1170fb25818c

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
<<<<<<< HEAD
      <Route path="*" element={<h1>Error 404 sirjak</h1>}></Route>

||||||| a5eb1b8
      <Route path="*" element={<h1>Error 404 sirjak</h1>}></Route>
=======
      <Route path="*" element={<h1>Error 404</h1>}></Route>
>>>>>>> a3ceb4a70cc9288deb73da18c4ed1170fb25818c
      <Route path="/auth" element={<Auth />}>
        <Route index element={<SignIn/>} />
        <Route path="sign-up">
          <Route index element={<SignUp/>}/>
          <Route path="activate" element={<ActivateAccount/>}/>
        </Route>
      </Route>
<<<<<<< HEAD

      
      <Route path="/" element={<Link to="/auth">Auth</Link>} />
||||||| a5eb1b8
      <Route path="/" element={<Link to="/auth">Auth</Link>} />
=======
      <Route path="/dashboard" element={<Dashboard />}>
      </Route>
      <Route path="/" element={<><Link to="/auth">Auth</Link> <Link to="/dashboard">dashboard</Link> </>} />
>>>>>>> a3ceb4a70cc9288deb73da18c4ed1170fb25818c
    </Routes>
    </>
  )
}

export default App;