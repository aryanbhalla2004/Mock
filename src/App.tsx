import {Route, Routes, useNavigate, Link} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/sign-in/Sign-In";
import SignUp from "./pages/auth/sign-up/Sign-Up";
import { ActivateAccount } from "./pages/auth/activate-account/ActivateAccount";
import Dashboard from "./pages/backend/Dashboard";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="*" element={<h1>Error 404</h1>}></Route>
      <Route path="/auth" element={<Auth />}>
        <Route index element={<SignIn/>} />
        <Route path="sign-up">
          <Route index element={<SignUp/>}/>
          <Route path="activate" element={<ActivateAccount/>}/>
        </Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
      </Route>
      <Route path="/" element={<><Link to="/auth">Auth</Link> <Link to="/dashboard">dashboard</Link> </>} />
    </Routes>
    </>
  )
}

export default App;