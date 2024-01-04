import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className='navbar navbar-expand-lg mb-3' style={{backgroundSize: "0", backgroundColor: "#79BAEC"}}>
            <div className='collapse navbar-collapse d-flex'>
				<NavLink className='navbar-brand' to='/'>
					Monster Hunter World
				</NavLink>
                <ul className='navbar-nav'>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/monsters'>
							Monsters
						</NavLink>
					</li>
                    <li className='nav-item'>
						<NavLink className='nav-link' to='/locations'>
							Locations
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/armors'>
							Armors
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/weapons'>
							Weapons
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/forum'>
							Forum
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/about'>
							About
						</NavLink>
					</li>
                </ul>
			</div>
        </nav>
    )
};