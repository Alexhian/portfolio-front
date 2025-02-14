import { IoMdMail } from "react-icons/io";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<>
			<footer
				id="footer"
				className="bg-gray-800 text-white p-15 text-center flex flex-col items-center gap-15"
			>
				<section className="flex gap-10">
					<a
						href="https://www.linkedin.com/in/alexandre-hiance-111718151/"
						target="_blank"
						rel="noopener noreferrer"
						id="title"
						className="text-gray-200 hover:text-emerald-500 flex justify-center items-center gap-2 cursor-pointer"
					>
						<FaLinkedin className="size-7" />
						LinkedIn
					</a>
					<a
						href="https://github.com/Alexhian"
						target="_blank"
						rel="noopener noreferrer"
						id="title"
						className="text-gray-200 hover:text-emerald-500 flex justify-center items-center gap-2 cursor-pointer"
					>
						<FaGithub className="size-7" />
						GitHub
					</a>
					<a
						href="https://mail.google.com/mail/?view=cm&to=alexandrehiance@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						id="title"
						className="text-gray-200 hover:text-emerald-500 flex justify-center items-center gap-2 cursor-pointer"
					>
						<IoMdMail className="size-7" /> Contact
					</a>
				</section>
				<p>Copyright &copy; 2025 | Alexandre Hiance | Tous droits réservés.</p>
			</footer>
		</>
	);
}

export default Footer;
