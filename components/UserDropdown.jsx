import React, { useState, useEffect, useContext } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import fetchCollection from "../api/fetchCollection";
import UserContext from "../context/User";

export default function UsersList() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const { setUser } = useContext(UserContext);

  // get list of users
  useEffect(() => {
    fetchCollection("users").then((users) => {
      const newUserList = users.map((person) => {
        const updatedUser = {};
        updatedUser.label = person.name;
        updatedUser.id = person.id;
        updatedUser.value = person;
        return updatedUser;
      });
      setItems(newUserList);
    });
  }, []);

  DropDownPicker.setListMode("SCROLLVIEW");
  return (
    <DropDownPicker
      open={open}
      items={items}
      setOpen={setOpen}
      onSelectItem={(value) => {
        setUser(value.value);
      }}
    />
  );
}
