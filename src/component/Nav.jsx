import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
		
			<img
				className="nav__logo"
				src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
				alt="Netflix Logo"
			/>
			
			<img
				className="nav__avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="Avatar logo"
			/>
		

		 </div>
	);
}

export default Nav;
