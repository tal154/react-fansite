import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import MonsterCard from "./MonsterCard";

export default function MonsterList({monster}) {
    const [monsters, setMonsters] = useState([]);
    useEffect(() => {
        fetch('https://mhw-db.com/monsters')
    .then(response => response.json())
    .then(mon => {
        setMonsters(mon)
    });
    }, []);

    return (
        <div>
            <h1>Monsters</h1>
          
        
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {monsters.map(monster => {
                    return <MonsterCard monster={monster} key={monster.id}/>
                })}
            </div>
            
        </div>
    );

    
}