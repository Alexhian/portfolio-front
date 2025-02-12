import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthAdmin from "./component/Auth/AuthAdmin";
import "./index.css";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "admin",
		element: <AuthAdmin />,
		children: [
			{
				path: "dashboard",
				element: <Admin />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
