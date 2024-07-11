/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLang } from "../utils/configSlice";
const Header = () => {
  const [showList, setShowList] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const languageSelector = useSelector((store) => store.gpt.showGptSearch);
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
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // An error happened.
        navigate("/error");
        // console.log(error);
      });
  };
  const handleMouseEnter = () => {
    setShowList(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowList(false);
    }, 1000);
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="">
      {user === null && (
        <div className="w-screen absolute  bg-gradient-to-b from-black z-10">
          <img className="w-44 mx-14" src={LOGO} alt="logo" />
        </div>
      )}

      {user && (
        <div className="absolute  w-screen flex justify-between bg-gradient-to-b from-black z-10">
          <div className="">
            <img className="w-44 mx-14" src={LOGO} alt="logo" />
          </div>
          <div className="flex mx-20 ">
            {languageSelector && (
              <div className="my-auto mr-4">
                <select
                  className="w-20 bg-gray-800 text-white rounded-sm"
                  onChange={handleLangChange}
                >
                  {SUPPORTED_LANG.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="my-auto">
              <img
                className="object-contain rounded-md z-40"
                src={USER_AVATAR}
              />
            </div>

            {/* <button className="text-white" onClick={handleSignOut}>
              SignOut
            </button> */}
            <div
              onMouseEnter={handleMouseEnter}
              className="h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-white mt-8 ml-2"
            />
          </div>
          {showList && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute ml-[85vw] mt-14 z-50 hover:cursor-pointer"
            >
              <div className="text-white bg-black absolute w-48 bg-opacity-85">
                <ul className="p-4 ">
                  <li className="hover:underline" onClick={handleGptSearch}>
                    {languageSelector ? "Home" : "GPT Search"}
                  </li>
                  <li className="hover:underline">Manage Profiles</li>
                  <li className="hover:underline">Transfer Profiles</li>
                  <li className="hover:underline">Account</li>
                  <li className="hover:underline">Help Centre</li>
                  <li className="border border-1 border-gray-400"></li>
                  <li className="hover:underline" onClick={handleSignOut}>
                    Sign out of Cassandra
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
