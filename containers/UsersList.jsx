import React, {useState, useEffect} from "react";
import fetchCollection from "../api/fetchCollection";
import UsersCard from "../components/cards/UsersCard";

export default function UsersList () {
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        fetchCollection("users").then((users) => {
            setUsersList(users)
        })
    }, [])

    return usersList.map((item) => {
        <UsersCard
        key={item.name}
        name={item.name}
        avartarUrl={item.avartarUrl}
        />
    })
}
