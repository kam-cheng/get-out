import React, { useState, useEffect, useContext } from "react";
import fetchCollection from "../api/fetchCollection";
import UsersCard from "../components/cards/UsersCard";
import UserContext from "../context/User";
import DropDownPicker from "react-native-dropdown-picker";
import { Text } from "react-native";

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetchCollection("users").then((data) => setUsersList(data));
  }, []);

  // const userItems = usersList.map((user) => {
  //   const obj = {
  //     label: user.name,
  //     value: user.id,
  //   };
  //   return obj;
  // });

  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState(userItems);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
