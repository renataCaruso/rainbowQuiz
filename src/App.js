import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './screens/login/index.js';
import { Register } from './screens/Register/index.js';
import { Home } from './screens/Home/index.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home"
          element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login"
          element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register"
          element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App