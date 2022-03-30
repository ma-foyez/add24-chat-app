
import ChatPage from "../Pages/ChatPage";
import HomePage from "../Pages/HomePage";

const routes = [
    {
        path: "/",
        name: "Home Page",
        element: HomePage,
    },
    {
        path: "/chat",
        name: "Chat Page",
        element: ChatPage,
    },
];

export default routes;