import { CiMail } from "react-icons/ci";

function Footer() {
	return (
		<>
			<footer
				id="footer"
				className="bg-gray-800 text-white p-6 text-center flex flex-col items-center"
			>
				<div className="flex gap-5 mb-2">
					<a
						href="https://www.linkedin.com/in/alexandre-hiance-111718151/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:underline"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/Alexhian"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:underline"
					>
						GitHub
					</a>
					<a
						href="mailto:email@example.com"
						className="text-white hover:underline flex justify-center items-center gap-2"
					>
						{" "}
						<CiMail className="size-7" /> Contact
					</a>
				</div>
				<p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
			</footer>
		</>
	);
}

export default Footer;
