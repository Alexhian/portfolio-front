import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="bg-gray-800 text-white p-5 flex items-center justify-end sticky top-0 z-50">
			<nav>
				<ul className="flex gap-4">
					<li>
						<button
							type="button"
							onClick={() =>
								document
									.getElementById("footer")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className="rounded"
						>
							Contact
						</button>
					</li>
					<li>
						<Link to="admin/dashboard" className="rounded">
							Admin
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
