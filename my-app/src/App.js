import Home from "./pages/Home";
import Register from "./pages/Register";
import "./style.scss"
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
