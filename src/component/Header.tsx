import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="bg-gray-800 p-8 flex items-center justify-end sticky top-0 z-50">
			<nav>
				<ul className="flex gap-20">
					<li>
						<Link
							className="text-gray-200 text-xl hover:text-emerald-500 cursor-pointer"
						to="#about"
						>
							À propos
						</Link>
					</li>
					<li>
						<Link
							className="text-gray-200 text-xl hover:text-emerald-500 cursor-pointer"
						to="#projects"
						>
							Mes projets
						</Link>
					</li>
					<li>
						<Link
							to="#footer"
							className="text-gray-200 text-xl hover:text-emerald-500 cursor-pointer"
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="admin/dashboard"
							className="text-gray-200 text-xl hover:text-emerald-500 cursor-pointer"
						>
							Admin
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
