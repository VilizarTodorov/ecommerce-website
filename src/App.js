import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Routes from "./components/Routes";
import { auth } from "./Firebase/firebase";
import { isAppReadySelector } from "./helpers/selectors";
import { setToReady } from "./Redux/AppSlice/app-slice";
import { clear } from "./Redux/OrdersSlice/order-slice";
import { resetUser, setUserAndWishList, setUid } from "./Redux/userSlice/user-slice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isAppReady = useSelector(isAppReadySelector);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUid(authUser.uid));
        dispatch(setUserAndWishList(authUser.uid)).then(() => dispatch(setToReady()));
      } else {
        dispatch(resetUser());
        dispatch(setToReady());
        dispatch(clear());
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
