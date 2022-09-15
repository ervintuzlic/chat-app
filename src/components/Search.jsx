import React, { useContext, useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser} = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"), 
      where("displayName", "==", username)
      );


    try{
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data())
    });
  }
  catch(err){
    setErr(true);
  }
  };

  const handleKey = (e)=>{
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () =>{
    //check whether the group (chats in firestore) exists, if not create
    // create user chats
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;


    try {
    const res = await getDoc(doc(db, "chats", combinedId));

    if(!res.exists()){
      // create chat in chats collection
      await setDoc(doc(db,"chats",combinedId), { messages: [] });

      // create user chat
      await updateDoc(doc(db,"userChats",currentUser.uid),{
        [combinedId+".userInfo"]:{
          uid:user.uid,
          displayName:user.displayName,
          photoURL: user.photoURL,
        },
        [combinedId+".date"]:serverTimestamp(),
      });

      await updateDoc(doc(db,"userChats",user.uid),{
        [combinedId+".userInfo"]:{
          uid:currentUser.uid,
          displayName:currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedId+".date"]:serverTimestamp(),
      });
    }
    }catch(err){

    }
    setUser(null);
    setUsername("");

  };

  return (
    <div className="search-container">
        <input type="text" value={username} placeholder="Search name" onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} />
        {err && <p>User not found!</p>}
        {user && 
        <div className="individual-chat" onClick={handleSelect}>
            <div className="user-image">
                <img src={user.photoURL} alt="" />
            </div>
            <div className="user-info">
                <span>{user.displayName}</span>
                <p>Message from user</p>
            </div>
        </div>}
    </div>
  )
}

export default Search