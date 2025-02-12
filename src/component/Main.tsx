import axios from "axios";
import { useEffect, useState } from "react";
import {
	FaCss3Alt,
	FaFigma,
	FaGitAlt,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import { SiExpress, SiMysql, SiTypescript } from "react-icons/si";
import TypeWriterEffect from "react-typewriter-effect";
import backgroundImage from "../assets/bg-header.jpg";
import profilePicture from "../assets/photo-profil.JPG";

interface Project {
	id: number;
	title: string;
	description: string;
}

function Main() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/projects`)
			.then((res) => setProjects(res.data));
	}, []);

	return (
		<main
			className="relative bg-cover bg-center min-h-screen p-6"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<section className="flex justify-around items-start space-y-7">
				<FaHtml5 className="text-orange-500 size-10" />
				<FaCss3Alt className="text-blue-500 size-10" />
				<FaJs className="text-yellow-500 size-10" />
				<SiTypescript className="text-blue-500 size-10" />
				<FaReact className="text-blue-500 size-10" />
				<FaNodeJs className="text-green-500 size-10" />
				<SiExpress className="text-white size-10" />
				<SiMysql className="text-white size-10" />
				<FaFigma className="text-white size-10" />
				<FaGitAlt className="text-orange-500 size-10" />
			</section>

			<section className="flex flex-col items-center text-center gap-3">
				<img
					src={profilePicture}
					alt="Profile"
					className="w-40 rounded-full  shadow-lg"
				/>
				<h1 className="text-3xl">
					Hi, I'm <span className="text-emerald-500 font">Alex</span>
				</h1>
				<h2 className="text-2xl flex gap-2">
					Web Developper
					<TypeWriterEffect
						text={"Fullstack"}
						multiText={["Frontend", "Backend", "Fullstack"]}
						multiTextDelay={1000}
						typeSpeed={100}
						cursor
						cursorStyle="_"
						cursorColor="white"
						deleteSpeed={50}
						delaySpeed={1000}
						loop={true}
					/>
				</h2>
			</section>
			<div className="mt-10">
				<h2 className="text-2xl font-bold text-center">Mes Projets</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
					{projects.map((project: Project) => (
						<div key={project.id} className="bg-gray-800 p-4 rounded shadow-lg">
							<h3 className="text-xl font-bold">{project.title}</h3>
							<p className="mt-2">{project.description}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default Main;
