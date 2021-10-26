import { Link } from "react-router-dom";
import classes from  "./Navigator.module.css"

function Navigator() {
	return (
		<header className={classes.header}>
	  	<div className={classes.logo}>React Meetups</div>
			<nav>
				<ul>
				<li>
					<Link to="/">All Meetups</Link>
				</li>
				<li>
					<Link to="/favourites">Favorites</Link>
				</li>
				<li>
					<Link to="/new-meetup">New Meetup</Link>
				</li>
				</ul>
			 </nav>
		</header>
	);
}

export default Navigator
