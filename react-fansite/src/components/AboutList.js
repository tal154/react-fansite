import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AboutCard from "./AboutCard";

export default function AboutList() {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/about')
            .then(res => res.json())
            .then(data => setAbouts(data));
    }, []);

    return (
        <div>
            <h1>About</h1>
            <hr></hr>
            <h2 className="mb-3"> About the Website</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3">
                <div className="col-4">
                    <img src="https://static.tvtropes.org/pmwiki/pub/images/monsterhunterworld.jpg"/>
                </div>
                <div className = "col">This website is a fansite of a video game of Monster Hunter World. The latest entry in the critically acclaimed 40 million unit selling action RPG series, Monster Hunter: World introduces a living, breathing ecosystem in which players take on the role of a hunter that seeks and slays ferocious beasts in heart-pounding battles. Venture on quests alone or with up to three other hunters in a newly designed online drop-in multiplayer system which allows cross-region cooperative play between Japan and the West, uniting the global player base for the first time ever. Monster Hunter: World will also be the first game in the series with a worldwide simultaneous launch window and is planned for release on PlayStation® 4 computer entertainment system and Xbox One in early 2018. A PC release will follow at a later date.</div>
            </div>
            <h2 className="mb-3">About Us</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {abouts.map(about => {
                    return <AboutCard about={about} key={about.aboutId}/>
                })}
            </div>
        </div>

    );

}