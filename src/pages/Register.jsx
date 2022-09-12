import React, {useState} from 'react'
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
    const res = await createUserWithEmailAndPassword(auth, email, password)

    const date = new Date().getTime();
    const storageRef = ref(storage, `${displayName + date}`);

    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
        }
        catch(err){
          console.log(err);
          setErr(false);
          setLoading(false);
        }
      })
    });
  }
  catch(err){
    console.log(err);
    setErr(true);
    setLoading(false);
  }
}
  return (
    <div id="register-container">
        <div id="register-section">
            <h1>Chatty</h1>
            <form onSubmit={handleSubmit}>
                <input type="name" placeholder="Enter your name!"/>
                <input type="email" placeholder="Enter your email!"/>
                <input type="password" placeholder="Enter your password!"/>
                <label htmlFor="avatar">
                    <img src={Add} alt=""/>
                    <p>Choose your image!</p>
                </label>
                <input id="avatar" type="file" />

                <button disabled={loading}>Sign up</button>
                {loading && "Uploading and compressing the image please wait..."}
                 {err && <span>Something went wrong</span>}
            </form>
            <p>You have already register? Login</p>
        </div>
    </div>
  )
}

export default Register