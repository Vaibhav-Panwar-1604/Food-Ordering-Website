import React, { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default",
    setUserName: () => {},
})

export default UserContext; 