import Register from './routes/Register';
import Login from './routes/Login';
import Layout from './Layout' 
import Home from './routes/Home';
import Unauthorized from './routes/Unauthorized';
import RequireAuth from './RequireAuth';
import PersistLogin from './Components/PersistLogin';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="unauthorized"  element={<Unauthorized />} />

        {/* Protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth/>}>
            <Route path="gatos" element={<Home />} />
          </Route>
        </Route>
      </Route>
    </Routes>
    
  )
}

export default App
