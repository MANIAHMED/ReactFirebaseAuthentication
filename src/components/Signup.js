import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

function Signup() {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [emailLogin, setEmailLogin] = useState("");

  const [passwordLogin, setPasswordLogin] = useState("");
  const [user,setUser] = useState({})


  onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)

  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRegister,
        passwordRegister
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => { try {
    const user = await signInWithEmailAndPassword(
      auth,
      emailLogin,
      passwordLogin
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }};
  const logout = async () => {
      await signOut(auth)
  };
  return (
    <div>
      <div>
        <h1>SignUp</h1>
        <input
          type="email"
          onChange={(event) => {
            setEmailRegister(event.target.value);
          }}
        ></input>

        <input
          type="password"
          onChange={(event) => {
            setPasswordRegister(event.target.value);
          }}
        ></input>
        <button onClick={register}>Signup</button>
        {user?.email}
      </div>

      <div>
        <h1>Login</h1>
        <input
          type="email"
          onChange={(event) => {
            setEmailLogin(event.target.value);
          }}
        ></input>
        <input
          type="password"
          onChange={(event)=>{setPasswordLogin(event.target.value)}}
        ></input>
        <button onClick={login}>Login</button>
      </div>

      <button onClick={logout} >SignOut</button>
    </div>
  );
}

export default Signup;
