import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Actions/userAction";

const UserList = ({
  userState,
  setIsediting,
  setEditingIndex,
  setName,
  setEmail,
  setPassword,
  setEmpty,
}) => {
  const dispatch = useDispatch();
  const clearUser = (idx) => {
    dispatch(deleteUser(idx));
  };

  const editHandler = (id) => {
    const index = userState.find((edit) => edit.id === id);
    setName(index.name);
    setEmail(index.email);
    setPassword(index.password);
    setEditingIndex(index.id);
    setIsediting(true);
    setEmpty(false);
  };

  return (
    <div className="basis-[58%]">
      <h2 className="title">User Table</h2>
      <ul className="user-list">
        <li className="basis-[5%]">Name</li>
        <li className="basis-[17%]">Email</li>
        <li className="basis-[9%]">Password</li>
        <li className="basis-[8%] pl-[3.2%]">Edit</li>
        <li className="basis-[7%] pl-[1.2%]">Delete</li>
      </ul>
      <ul>
        {userState.map((users) => {
          return (
            <li key={users.id} className="user-list items-center mt-4">
              <span className="list basis-[5%]">{users.name}</span>
              <span className="list basis-[14%]">{users.email}</span>
              <span className="list basis-[10%]">{users.password}</span>
              <button
                className="list basis-[6%] btn m-0 py-[7px] px-[14px] text-center"
                onClick={() => editHandler(users.id)}
              >
                Edit
              </button>
              <button
                className="list basis-[5%] btn m-0 py-[7px] px-[14px] text-center bg-red-700 hover:bg-red-800"
                onClick={() => clearUser(users.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
