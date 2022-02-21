import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

import Home from './Pages/Home';
import Signup from './Pages/Signup'
import ViewPost from './Pages/Viewpost'
import Login from './Pages/Login'
import Create from './Pages/Create'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'

function App() {
  const [{user}, dispatch ] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [user])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<ViewPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
