import Home from "./Home.jsx";
import Login from "./Login.jsx";

let routers = [
    { path: "/", component: Login, exact: true },
    { path: "/login", component: Login },
    { path: "/home", component: Home }
]

export default routers;