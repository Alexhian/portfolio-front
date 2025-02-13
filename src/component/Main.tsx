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
			className="relative bg-cover bg-center min-h-screen p-6 space-y-40"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<section className="flex justify-around items-start space-y-7 mt-15">
				<FaHtml5
					title="HTML5"
					className="text-orange-500 size-10 transition-transform hover:scale-125"
				/>
				<FaCss3Alt
					title="CSS"
					className="text-blue-500 size-10 transition-transform hover:scale-125"
				/>
				<FaJs
					title="Javascript"
					className="text-yellow-500 size-10 transition-transform hover:scale-125"
				/>
				<SiTypescript
					title="Typescript"
					className="text-blue-500 size-10 transition-transform hover:scale-125"
				/>
				<FaReact
					title="React"
					className="text-blue-500 size-10 transition-transform hover:scale-125"
				/>
				<FaNodeJs
					title="NodeJs"
					className="text-green-500 size-10 transition-transform hover:scale-125"
				/>
				<SiExpress
					title="Express"
					className="text-gray-200 size-10 transition-transform hover:scale-125"
				/>
				<SiMysql
					title="MySql"
					className="text-gray-200 size-10 transition-transform hover:scale-125"
				/>
				<FaFigma
					title="Figma"
					className="text-gray-200 size-10 transition-transform hover:scale-125"
				/>
				<FaGitAlt
					title="Git"
					className="text-orange-500 size-10 transition-transform hover:scale-125"
				/>
			</section>

			<section className="flex flex-col items-center text-center gap-10">
				<img
					src={profilePicture}
					alt="Profile"
					className="w-50 rounded-3xl shadow-lg"
				/>
				<h1 className="text-4xl text-gray-200">
					Hi, I'm <span className="text-emerald-500 font">Alex</span>
				</h1>
				<h2 className="text-4xl flex gap-2  text-gray-200">
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
			<section id="about" className="text-gray-200">
				<h2 className="text-3xl font-bold text-center mb-8 pt-40 ">
					À propos de moi
				</h2>
				<p className="max-w-3xl mx-auto text-justify mb-4">
					Passionné par le développement web, je suis un développeur fullstack
					JavaScript avec une expertise en React, Node.js, Express et MySQL. Mon
					objectif est de créer des applications modernes, performantes et
					intuitives, en alliant une expérience utilisateur fluide à une
					architecture backend robuste et sécurisée.
				</p>
				<p className="max-w-3xl mx-auto text-justify mb-4">
					Côté frontend, je conçois des interfaces dynamiques et réactives avec
					React, en mettant un point d'honneur à optimiser les performances et
					l'accessibilité. J'accorde une attention particulière aux détails et
					aux interactions pour offrir une navigation fluide et engageante. Je
					suis également familier avec les outils de design comme Figma et les
					bonnes pratiques UX/UI pour concevoir des interfaces ergonomiques et
					esthétiques.
				</p>
				<p className="max-w-3xl mx-auto text-justify mb-4">
					Côté backend, j'utilise Node.js et Express pour développer des APIs
					efficaces et scalables, tout en assurant une gestion optimisée des
					bases de données avec MySQL. Je veille à la qualité du code, à la
					sécurité et à la maintenabilité des applications que je développe.
				</p>
				<p className="max-w-3xl mx-auto text-justify mb-4">
					Curieux et en veille constante sur les nouvelles technologies, j'aime
					relever des défis techniques et apprendre en continu. Mon approche
					repose sur la collaboration, l'innovation et une forte adaptabilité
					aux besoins des projets. Mon ambition est de transformer des idées en
					solutions concrètes et impactantes, en apportant une vraie valeur
					ajoutée aux utilisateurs finaux.
				</p>
			</section>
			<section>
				<div className="mt-10 text-gray-200">
					<h2 id="projects" className="text-3xl font-bold text-center mb-8 ">
						Mes Projets
					</h2>
					<p className="max-w-3xl mx-auto text-justify mb-4">
						Au cours de ma formation en développement web, j'ai eu l'opportunité
						de travailler sur divers projets, me permettant de mettre en
						pratique mes compétences fullstack et d'explorer plusieurs aspects
						du développement.
					</p>
					<p className="max-w-3xl mx-auto text-justify mb-4">
						La plupart de ces projets ont été réalisés en équipe selon les
						méthodologies Agile/Scrum, avec une gestion du code source via Git
						et GitHub.
					</p>
					<p className="max-w-3xl mx-auto text-justify mb-4">
						Ces expériences m'ont permis de consolider mes compétences en
						conception d'API REST, en optimisation des performances et en
						déploiement d'applications web. Elles m'ont également appris à
						résoudre des problématiques techniques concrètes et à adopter une
						approche rigoureuse pour livrer des projets fonctionnels, bien
						structurés et maintenables.
					</p>
					<p className="max-w-3xl mx-auto text-justify mb-30">
						Voici quelques exemples de projets sur lesquels j'ai travaillé :
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4  text-gray-200 m-24">
						{projects.map((project: Project) => (
							<div
								key={project.id}
								className="bg-gray-800 p-4 rounded shadow-lg"
							>
								<h3 className="text-xl font-bold">{project.title}</h3>
								<p>{project.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;
