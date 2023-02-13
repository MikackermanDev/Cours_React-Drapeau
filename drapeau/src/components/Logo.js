import React from "react";

const Logo = () => {
	return (
		<div>
			<div className="logo">
				{/* Les images importées depuis la balise img sont accessible dans "public" il faut faire comme si on était dans public donc le lien du logo c'est ./logo192.png */}
				<img src="./logo192.png" alt="logo react" />
				<h3>React World</h3>
			</div>
		</div>
	);
};

export default Logo;
