import React, { useState, useEffect, useContext } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import fetchCollection from "../api/fetchCollection";
import UserContext from "../context/User";

export default function UsersList() {
  const [items, setItems] = useState([]);
  const { setUser } = useContext(UserContext);

  // get list of users
  useEffect(() => {
    fetchCollection("users").then((users) => {
      const newUserList = users.map((person) => {
        const updatedUser = {};
        updatedUser.label = person.name;
        updatedUser.value = person;
        return updatedUser;
      });
      setItems(newUserList);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  DropDownPicker.setListMode("SCROLLVIEW");
  return (
    <DropDownPicker
      open={open}
      value={value}
      itemKey={"name"}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={(value) => {
        setUser(value.value);
      }}
    />
  );
}
