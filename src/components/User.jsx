import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, editUseers } from "../Actions/userAction";

const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsediting] = useState(false);
  const [editIndex, setEditingIndex] = useState(null);

  const ErrosMsg = (msg) => {
    setEmpty(true);
    setError(msg);
  };

  const clickHandler = () => {
    if (name.trim() && email.trim() && password.trim()) {
      if (isEditing && editIndex) {
        dispatch(editUseers(name, email, password, editIndex));
        setEditingIndex(null);
        setIsediting(false);
      } else {
        dispatch(addUsers(name, email, password));
      }
      setName("");
      setEmail("");
      setPassword("");
      setEmpty(false);
    } else {
      ErrosMsg("*Field is required");
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState));
  }, [userState]);

  return (
    <>
      <div className="basis-[38%]">
        <h1 className="title">User Form</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-between">
            <div className="common basis-[48%]">
              <label htmlFor="name" className="text-[#c6c7c9]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Jane"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-common"
              />
              {empty ? <span className="error">{error}</span> : ""}
            </div>
            <div className="common basis-[48%]">
              <label htmlFor="Email" className="text-[#c6c7c9]">
                Email
              </label>
              <input
                type="Email"
                name="email"
                id="Email"
                placeholder="Doe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-common"
              />
              {empty ? <span className="error">{error}</span> : ""}
            </div>
          </div>
          <div className="common">
            <label htmlFor="password" className="text-[#c6c7c9]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-common px-[2%]"
            />
            {empty ? <span className="error">{error}</span> : ""}
          </div>
          <button onClick={clickHandler} className="btn">
            Add User
          </button>
        </form>
      </div>
      <UserList
        userState={userState}
        setIsediting={setIsediting}
        setEditingIndex={setEditingIndex}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setEmpty={setEmpty}
      />
    </>
  );
};

export default User;
