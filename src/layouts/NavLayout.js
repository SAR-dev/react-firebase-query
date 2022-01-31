import React, { useContext, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase";
import AuthContext from "../context/auth";

const NavLayout = () => {
  const [authData, setAuthData] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const provider = new GoogleAuthProvider();
  function signin() {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setAuthData(result.user);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  return (
    <div>
      <nav className="shadow py-3 bg-white">
        <div className="max-w-screen-lg mx-auto flex items-center">
          <p className="text-xl font-semibold text-zinc-800">Arch Linux</p>
          <div className="ml-auto space-x-5">
            {authData && (
              <button className="btn btn-danger" onClick={() => signOut(auth)}>
                Sign Out
              </button>
            )}
            <button
              className={`btn btn-success ${loading && "btn-loading"}`}
              onClick={() => !authData && signin()}
            >
              {loading && (
                <span
                  className="w-4 h-4 spinner mr-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {authData ? authData.displayName : "Google"}
            </button>
          </div>
        </div>
      </nav>
      {/* <p>{authData && JSON.stringify(authData)}</p> */}
    </div>
  );
};

export default NavLayout;
