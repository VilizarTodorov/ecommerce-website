import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";
import { auth } from "./Firebase/firebase";
import { setToReady } from "./Redux/AppSlice/app-slice";
import { resetUser, setUid, setUserEntry } from "./Redux/userSlice/user-slice";

function App() {
  const dispatch = useDispatch();
  const isAppReady = useSelector((state) => state.app.isAppReady);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUid(authUser.uid));
        dispatch(setUserEntry(authUser.uid)).then(() => dispatch(setToReady()));
      } else {
        dispatch(resetUser());
        dispatch(setToReady());
      }
    });

    return () => {
      listener();
    };
  }, [dispatch]);

  return (
    <Fragment>
      {isAppReady ? (
        <div className="App">
          <Header></Header>
          <main className="main">
            <Routes></Routes>
          </main>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </Fragment>
  );
}

export default App;
