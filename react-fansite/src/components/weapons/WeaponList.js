import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import WeaponCard from "./WeaponCard";

export default function WeaponList({weapon}) {
    const [weapons, setWeapons] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mhw-db.com/weapons'
            );
            if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                );
              }
        let actualData = await response.json();
        setWeapons(actualData)
        }
        getData()
    }, []);

    let greatSwordList = [];
    let longSworldList = [];
    let swordAndShieldList = [];
    let dualBladeList = [];
    let hammerList = [];
    let huntingHornList = [];
    let lanceList = [];
    let gunlanceList = [];
    let switchAxeList = [];
    let chargeBladeList = [];
    let insectGlaiveList = [];
    let lightBowgunList = [];
    let heavyBowgunList = [];
    let bowList = [];

    weapons.map(weapon => {
        switch (weapon.type) {
            case 'great-sword':
                greatSwordList.push(weapon);
                break;
            case 'long-sword':
                longSworldList.push(weapon);
                break;
            case 'sword-and-shield':
                swordAndShieldList.push(weapon);
                break;
            case 'dual-blades':
                dualBladeList.push(weapon);
                break;
            case 'hammer':
                hammerList.push(weapon);
                break;
            case 'hunting-horn':
                huntingHornList.push(weapon);
                break;
            case 'lance':
                lanceList.push(weapon);
                break;
            case 'gunlance':
                gunlanceList.push(weapon);
                break;
            case 'switch-axe':
                switchAxeList.push(weapon);
                break;
            case 'charge-blade':
                chargeBladeList.push(weapon);
                break;
            case 'insect-glaive':
                insectGlaiveList.push(weapon);
                break;
            case 'light-bowgun':
                lightBowgunList.push(weapon);
                break;
            case 'heavy-bowgun':
                heavyBowgunList.push(weapon);
                break;
            case 'bow':
                bowList.push(weapon);
                break;
        }
    })

    return (
        <div className="mb-3">
            <h1 className="mb-3">Weapons</h1>
            <ul class="nav nav-pills mb-3">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/weapons">All</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/great-sword" state={{greatSwordList:{greatSwordList}}}>Great Sword</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/long-sword" state={{longSworldList:{longSworldList}}}>Long Sword</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/sword-and-shield" state={{swordAndShieldList:{swordAndShieldList}}}>Sword and Shield</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/dual-blades" state={{dualBladeList:{dualBladeList}}}>Dual Blades</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/hammer" state={{hammerList:{hammerList}}}>Hammer</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/hunting-horn" state={{huntingHornList:{huntingHornList}}}>Hunting Horn</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/lance" state={{lanceList:{lanceList}}}>Lance</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/gunlance" state={{gunlanceList:{gunlanceList}}}>Gunlance</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/switch-axe" state={{switchAxeList:{switchAxeList}}}>Switch Axe</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/charge-blade" state={{chargeBladeList:{chargeBladeList}}}>Charge Blade</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/insect-glaive" state={{insectGlaiveList:{insectGlaiveList}}}>Insect Glaive</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/light-bowgun" state={{lightBowgunList:{lightBowgunList}}}>Light Bowgun</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/heavy-bowgun" state={{heavyBowgunList:{heavyBowgunList}}}>Heavy Bowgun</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/weapons/bow" state={{bowList:{bowList}}}>Bow</Link>
                </li>
            </ul>
          
        
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {weapons.map(weapon => {
                    return <WeaponCard weapon={weapon} key={weapon.id}/>
                })}
            </div>
            
        </div>
    );

    
}