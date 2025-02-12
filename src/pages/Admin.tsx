import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
	const [projects, setProjects] = useState<
		{ id: number; title: string; description: string }[]
	>([]);
	const [form, setForm] = useState<{
		id: number | null;
		title: string;
		description: string;
	}>({ id: null, title: "", description: "" });

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/projects`)
			.then((res) => setProjects(res.data));
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (form.id) {
			await axios.put(
				`${import.meta.env.VITE_API_URL}/projects/${form.id}`,
				form,
			);
		} else {
			await axios.post(`${import.meta.env.VITE_API_URL}/projects`, form);
		}
		setForm({ id: null, title: "", description: "" });
		window.location.reload();
	};

	const handleEdit = (project: {
		id: number;
		title: string;
		description: string;
	}) => {
		setForm({
			id: project.id,
			title: project.title,
			description: project.description,
		});
	};

	const handleDelete = async (id: number) => {
		await axios.delete(`${import.meta.env.VITE_API_URL}/projects/${id}`);
		window.location.reload();
	};

	return (
		<div className="p-6 max-w-lg mx-auto">
			<h2 className="text-2xl font-bold mb-4">Gérer les Projets</h2>
			<form onSubmit={handleSubmit} className="mb-6">
				<input
					type="text"
					placeholder="Titre"
					value={form.title}
					onChange={(e) => setForm({ ...form, title: e.target.value })}
					className="w-full p-2 mb-2 border rounded"
				/>
				<textarea
					placeholder="Description"
					value={form.description}
					onChange={(e) => setForm({ ...form, description: e.target.value })}
					className="w-full p-2 mb-2 border rounded"
				/>
				<button
					type="submit"
					className="bg-green-500 text-white px-4 py-2 rounded"
				>
					Ajouter
				</button>
				{form.id && (
					<button
						type="submit"
						className="bg-green-500 text-white px-4 py-2 rounded"
					>
						Modifier
					</button>
				)}
			</form>
			<ul>
				{projects.map((project) => (
					<li
						key={project.id}
						className="bg-gray-800 text-white p-4 rounded mb-2 flex justify-between"
					>
						<span>{project.title}</span>
						<div>
							<button
								type="button"
								onClick={() => handleEdit(project)}
								className="bg-yellow-500 px-2 py-1 rounded mr-2"
							>
								Modifier
							</button>
							<button
								type="button"
								onClick={() => handleDelete(project.id)}
								className="bg-red-500 px-2 py-1 rounded"
							>
								Supprimer
							</button>
						</div>
					</li>
				))}
			</ul>
			<button
				className="bg-green-500 text-white px-4 py-2 rounded"
				type="button"
			>
				<Link to="/">Home</Link>
			</button>
		</div>
	);
}

export default Admin;
