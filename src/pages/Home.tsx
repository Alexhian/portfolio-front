// import { useEffect, useState } from "react";
// import axios from "axios";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Main from "../component/Main";

function Home() {
	return (
		<body className="bg-bg-header bg-no-repeat bg-cover">
			<Header />
			<Main />
			<Footer />
		</body>
	);
}

//   interface Project {
//     id: number;
//     title: string;
//   }

//   const [projects, setProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_API_URL}/projects`,).then((res) => setProjects(res.data));
//   }, []);
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Projets</h1>
//       <ul>
//         {projects.map((project: Project) => (
//           <li key={project.id} className="border p-2 my-2">{project.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default Home;
