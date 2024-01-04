import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ArmorCard from "../armors/ArmorCard";

export default function ArmorList(){
    const [ armors, setArmors ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://mhw-db.com/armor')
            .then(res => {
                if (res.ok ){
                    return res.json();
                }else if(res.status >= 500 ){
                    return res
                            .json()
                            .then(error => Promise.reject(new Error(error.message)));
                }else{
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .then(setArmors)
            .catch(error => {
                console.error(error);
                navigate('/error', {state : {error}});
            })
    },[])

    let headList = [];
    let chestList = [];
    let glovesList = [];
    let waistList = [];
    let legsList = [];

    armors.map(armor => {
        switch(armor.type){
            case 'head':
                headList.push(armor);
                break;
            case 'chest':
                chestList.push(armor);
                break;
            case 'gloves':
                glovesList.push(armor);
                break;
            case 'waist':
                waistList.push(armor);
                break;
            case 'legs':
                legsList.push(armor);
                break;
        }
    })



    return (
        <div className="mb-3">
            <h1 className="mb-3">Armors</h1>
            <ul className="nav nav-pills mb-3">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/armors">All</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/armors/head" state={{headList:{headList}}}>Head</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/armors/chest" state={{chestList:{chestList}}}>Chest</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/armors/waist" state={{waistList:{waistList}}}>Waist</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/armors/legs" state={{legsList:{legsList}}}>Legs</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/armors/gloves" state={{glovesList:{glovesList}}}>Gloves</Link>
                </li>
                
            </ul>

          
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {armors.map(armor => {
                    return <ArmorCard armor={armor} key={armor.id}/>
                })}
            </div>
            
        </div>

    );
}