import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const ContextApi = createContext(null);
const AuthContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google login
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

      // update user Profile
	  const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			 displayName: name, photoURL: photo 
		   })
	 }

	//  useEffect(() => {
	// 	onAuthStateChanged(auth,currentUser => {
	// 		setUser(currentUser)
	// 		setLoading(false)
	// 	})
	//  })

	 useEffect(() =>{
	 	const unsubsCribe = onAuthStateChanged(auth,currentUser => {
			setUser(currentUser)
			setLoading(false)
		});
		return () => {
			return unsubsCribe();
		}
	 } ,[])

  const authInfo = {
	user, 
	loading,
	createUser,
	signIn, 
	logOut,
	googleSignIn,
	updateUserProfile
  };

  
  return <ContextApi.Provider value={authInfo}>{children}</ContextApi.Provider>;
};

export default AuthContext;
