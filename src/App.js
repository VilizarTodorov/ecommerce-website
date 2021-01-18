import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";
import { auth } from "./Firebase/firebase";
import { resetUser, setUid, setUserEntry } from "./Redux/userSlice/user-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUid(authUser.uid));
        dispatch(setUserEntry(authUser.uid));
      } else {
        dispatch(resetUser());
      }
    });

    return () => {
      listener();
    };
  });

  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <Routes></Routes>
      </main>
    </div>
  );
}

export default App;
