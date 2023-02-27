import {Route, Routes, useNavigate, Link} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/sign-in/Sign-In";
import SignUp from "./pages/auth/sign-up/Sign-Up";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="*" element={<h1>Error 404 sirjak</h1>}></Route>
      <Route path="/auth" element={<Auth />}>
        <Route index element={<SignIn/>} />
        <Route path="sign-up" element={<SignUp/>} />
      </Route>
    </Routes>
    <Link to="/auth">Auth</Link>
    </>
  )
}

export default App;