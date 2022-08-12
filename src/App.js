import { Routes, Route} from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import MainPage from "./components/MainPage"
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <AuthContextProvider>
      <Routes>
          <Route path='/account' element= {<ProtectedRoute><MainPage/></ProtectedRoute>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Signin/>}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
