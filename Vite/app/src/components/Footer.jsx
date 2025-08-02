import React, { useState } from "react";

const Footer =  function ({name,children}) {
    const [user, setUser]  = useState(0);
    setInterval(()=> {
        setUser("sss");
    }, 2000);
    return (
        <>
        <h1>Hello foooter goes here {name}</h1>
        {children}
        </>
    );
}
export default Footer;