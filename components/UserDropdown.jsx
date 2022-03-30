import React, { useState, useEffect, useContext } from "react";
import fetchCollection from "../api/fetchCollection";
import UserContext from "../context/User";
import DropDownPicker from "react-native-dropdown-picker";
import fetchDocuments from "../api/fetchDocuments";

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const userNamesAndIds = usersList.map((user) => {
    const obj = {
      label: user.name,
      value: user.id,
    };
    return obj;
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Sarah", value: "7VaAlB3aJMkUlOCikZxp" },
    { label: "Tracy", value: "AVTfTz6NgIvILhstGowK" },
    { label: "Sam", value: "fVUWnw6WRJdy3Vi5OSxE" },
    { label: "Bender", value: "viZMDq8AlNeGsy7f2fKc" },
  ]);

  const [selectedUser, setSelectedUser] = useState();
  //   useEffect(() => {
  //     fetchDocuments({
  //       query: "==",
  //       collection: "users",
  //       key: "id",
  //       value: `${selectedUser}`,
  //       setState: setUser,
  //     });
  //   }, [selectedUser]);

  DropDownPicker.setListMode("SCROLLVIEW");
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(value) => setSelectedUser(value)}
    />
  );
}
