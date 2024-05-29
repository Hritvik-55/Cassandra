import { useRef, useState } from "react";
import Header from "./Header";
import { validateEmailPassword } from "../utils/ValidateEmailPassword";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    const msg = validateEmailPassword(
      email.current.value,
      password.current.value
    );
    setErrorMessage(msg);
    if (msg) return;
    //SignIn/Signup Logic here
    if (!isSignIn) {
      //Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
              // ...
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);

          // ..
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorCode === "auth/invalid-credential"
            ? setErrorMessage("Invalid username or password")
            : setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="h-[95vh]">
      <Header />
      <div className="absolute ">
        <img className="object-fill w-full" src={LOGIN_BG} />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute bg-black m-6 my-36 mx-auto right-0 left-0 h-[50vh]opacity-90 rounded-md"
      >
        <h1 className="text-white font-bold text-2xl p-2 m-2 mx-10 my-3">
          {isSignIn ? " Sign In" : "Sign up"}
        </h1>
        {errorMessage != null && (
          <div className="bg-yellow-600 w-9/12 p-4 m-2 mx-10 my-3 rounded-lg">
            {errorMessage}
          </div>
        )}

        {!isSignIn && (
          <input
            ref={name}
            className="w-9/12 p-2 m-2 mx-10 my-3 bg-gray-800 bg-opacity-100 text-opacity-100 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-9/12 p-2 m-2 mx-10 my-3 bg-gray-800 bg-opacity-100 text-opacity-100  text-white"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="w-9/12 p-2 m-2 mx-10 my-3 bg-gray-800 bg-opacity-100 text-opacity-100  text-white"
          type="password"
          placeholder="Password"
        />

        <button
          onClick={handleClick}
          className="bg-red-700 rounded-md p-2 m-2 w-9/12 mx-10 my-3 bg-opacity-100 text-opacity-100 text-white font-bold text-center "
        >
          {isSignIn ? " Sign In" : "Sign up"}
        </button>
        {isSignIn ? (
          <p className="text-white p-2 m-2 mx-10 my-3">
            New to Cassandra?
            <span
              className="font-extrabold cursor-pointer m-1"
              onClick={toggleSignIn}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-white p-2 m-2 mx-10 my-3">
            Already a member?
            <span
              className="font-extrabold cursor-pointer m-1"
              onClick={toggleSignIn}
            >
              Sign In.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
