import { Outlet } from "react-router-dom";

export default function AuthAdmin() {
	return (
		<div>
			<Outlet />
		</div>
	);
}

// import { Navigate, Outlet } from "react-router-dom";

// import { useAuth } from "../../contexts/AuthContext";

// export const AuthAdmin = () => {
//   const { user } = useAuth();

//   if (user?.role !== "admin") {
//     return <Navigate to={"/user/home"} replace />;
//   }

//   return (
//     <>
//       <Outlet />
//     </>
//   );
// };
