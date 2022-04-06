
import Router from "next/router";
import { useEffect } from "react";
function Logout() {

    useEffect(() => {
        localStorage.clear();
        Router.push('/login');
    }, [])

}

export default Logout;