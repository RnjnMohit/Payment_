import CookieContext from "./cookieContext";
import { useState } from "react";

const cookieState = (props) => {
    const [cookie, setCookie] = useState(undefined);
    const getCookie = async () => {
        const response = await fetch("http://localhost:3000/user/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        setCookie(json.cookie);
    }
    return (
        <CookieContext.Provider value={{cookie,setCookie,getCookie}}>
            {props.children}
        </CookieContext.Provider>
    )
}

export default cookieState