import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

import SkillsDetail from '../SkillsDetail';

export default function ArmorDetail(){

    const [ armor, setArmor] = useState(null);

    const navigate = useNavigate();
    const { armorId } = useParams();

    useEffect(() => {
        fetch(`https://mhw-db.com/armor/${armorId}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                }else if(res.status >= 500 ){
                    return res.json()
                                .then(error => Promise.reject(new Error(error.message())));
                }else{
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .then(setArmor)
            .catch(error => {
                console.error(error);
                navigate('/error', {state : {error}});
            })
    },[armorId]);

    if(!armor){
        return(
            <div
                style={{ minHeight: '80vh' }}
                className='d-flex justify-content-center align-items-center'>
                <div className='spinner-border ' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        )

    }

    return(
        <>
            <h1 className='mt-3 mb-3'> {armor.name} Detail </h1>

            <div className="my-4"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <img 
                    style={{height: '250px', objectFit: 'cover'}}
                    src={armor.assets.imageMale} alt={`Male ${armor.name}`} />
             </div>

            <div className='mb-3'>
                <label className='form-label'>Name</label>
                    <input type="text" className="form-control" 
                    id = "name"
                    name = "name"
                    value = {armor.name}
                    readOnly />
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='form-label'>Type</label>
                    <input type="text" className="form-control" 
                    id = "type"
                    name = "type"
                    value = {armor.type}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Rank</label>
                    <input type="text" className="form-control" 
                    id = "rank"
                    name = "rank"
                    value = {armor.rank}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Rarity</label>
                    <input type="number" className="form-control" 
                    id = "rarity"
                    name = "rarity"
                    value = {armor.rarity}
                    readOnly />
                </div>
            </div>
            <div className='mb-3'>
                <h4>Defense</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Base</label>
                        <input type="number" className="form-control" 
                        id = "base"
                        name = "base"
                        value = {armor.defense.base}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>max</label>
                        <input type="number" className="form-control" 
                        id = "max"
                        name = "max"
                        value = {armor.defense.max}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Augmented</label>
                        <input type="number" className="form-control" 
                        id = "augmented"
                        name = "augmented"
                        value = {armor.defense.augmented}
                        readOnly />
                    </div>
                </div>
            </div>

            <div className='mb-3'>
                <h4>Resistences</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Fire</label>
                        <input type="number" className="form-control" 
                        id = "fire"
                        name = "fire"
                        value = {armor.resistances.fire}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Water</label>
                        <input type="number" className="form-control" 
                        id = "water"
                        name = "water"
                        value = {armor.resistances.water}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Ice</label>
                        <input type="number" className="form-control" 
                        id = "ice"
                        name = "ice"
                        value = {armor.resistances.ice}
                        readOnly />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Thunder</label>
                        <input type="number" className="form-control" 
                        id = "thunder"
                        name = "thunder"
                        value = {armor.resistances.thunder}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Dragon</label>
                        <input type="number" className="form-control" 
                        id = "dragon"
                        name = "dragon"
                        value = {armor.resistances.dragon}
                        readOnly />
                    </div>
                </div>
            </div>
           
            <div className='mb-3'>
                <h4>Skills</h4>
                <hr></hr>
                {armor.skills.length == 0 ?
                    <div>
                        <p>No skills found</p>
                    </div>
                    :<SkillsDetail skills = {armor.skills} />
                }
            </div>

            <div>
                <Link className="btn btn-primary" to="/armors">Back</Link>
            </div>

                
         
            
        </>
    );



}