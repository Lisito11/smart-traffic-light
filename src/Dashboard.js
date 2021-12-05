import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";

export const Dashboard = () => {

  const [user, loading, /*error*/] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading, history]);

  return (
    <div className="dashboard dashboard-bg">
      <div className="dashboard__container">
        <div>{name}</div>
        <div>Metros: <b>50m 🚶‍♂️</b></div>
        <div>Pasos: <b>500 pasos 🚶‍♂️</b></div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>   
    </div>
  );
}
