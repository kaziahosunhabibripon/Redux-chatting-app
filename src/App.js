import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './features/Chat/Chat';
import Sidebar from './features/SideBar/Sidebar';
import {selectUser} from './features/counter/userSlice';
import Login from './features/Login/Login';
import { auth } from './features/firebaseConfig/firebase';
import {login, logout} from './features/counter/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
    console.log("user IS", authUser);
     if(authUser){
       dispatch(login({
         uid: authUser.uid,
         photo: authUser.photoURL,
         email: authUser.email,
         displayName: authUser.displayName
       })
       );
     }else{
       dispatch(logout());

     }

   });
  }, [dispatch]);
  return (
    <div className="App">
      { user ? (
        <>
          <Sidebar/>
          <Chat/>
        </>
        ):(
          <Login/>
        )}

    </div>
  );
}

export default App;
