import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
        console.log(error);
      });
  };
  return (
    <div>
      {user === null && (
        <div className="w-screen absolute  bg-gradient-to-b from-black z-10">
          <img className="w-44 mx-14" src={LOGO} alt="logo" />
        </div>
      )}

      {user && (
        <div className="flex justify-between">
          <div className="">
            <img className="w-44 mx-14" src={LOGO} alt="logo" />
          </div>
          <div className="flex mx-20">
            <div className="my-auto">
              <img className="object-contain" src={USER_AVATAR} />
            </div>
            <div>
              <svg viewBox="0 0 10 10">
                <path fill="#fff" d="M0 0 L5 5 L10 0z" />
              </svg>
            </div>
            <button onClick={handleSignOut}>SignOut</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
