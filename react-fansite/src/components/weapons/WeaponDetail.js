import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function WeaponDetail(){

    const [ weapon, setWeapon] = useState(null);

    const navigate = useNavigate();
    const { weaponId } = useParams();

    useEffect(() => {
        fetch(`https://mhw-db.com/weapons/${weaponId}`)
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
            .then(setWeapon)
            .catch(error => {
                console.error(error);
                navigate('/error', {state : {error}});
            })
    },[weaponId]);

    if(!weapon){
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
            <h1 className='mt-3 mb-3'> {weapon.name} Detail </h1>
            <div className="d-flex justify-content-end">
                <Link className="btn btn-warning mb-3" to="/weapons">Back</Link>
            </div>

            <div className="my-4"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <img 
                    className='card-img-top'
                    style={{height: '200px', width: '200px', objectFit: 'none', objectPosition: 'center'}}
                    src={weapon.assets.image} alt={`${weapon.name}`} />
             </div>

            <div className='mb-3'>
                <label className='form-label'>Name</label>
                    <input type="text" className="form-control" 
                    id = "name"
                    name = "name"
                    value = {weapon.name}
                    readOnly />
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='form-label'>Type</label>
                    <input type="text" className="form-control" 
                    id = "type"
                    name = "type"
                    value = {weapon.type}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Rarity</label>
                    <input type="number" className="form-control" 
                    id = "rarity"
                    name = "rarity"
                    value = {weapon.rarity}
                    readOnly />
                </div>
            </div>
            <div className='mb-3'>
                <h4>Attack</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Display</label>
                        <input type="number" className="form-control" 
                        id = "display"
                        name = "display"
                        value = {weapon.attack.display}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Raw</label>
                        <input type="number" className="form-control" 
                        id = "raw"
                        name = "raw"
                        value = {weapon.attack.raw}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Damage Type</label>
                        <input type="text" className="form-control" 
                        id = "damageType"
                        name = "damageType"
                        value = {weapon.damageType}
                        readOnly />
                    </div>
                </div>
            </div>
{/*
            <div className='mb-3'>
                <h4>Resistences</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Fire</label>
                        <input type="number" className="form-control" 
                        id = "fire"
                        name = "fire"
                        value = {weapon.resistances.fire}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Water</label>
                        <input type="number" className="form-control" 
                        id = "water"
                        name = "water"
                        value = {weapon.resistances.water}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Ice</label>
                        <input type="number" className="form-control" 
                        id = "ice"
                        name = "ice"
                        value = {weapon.resistances.ice}
                        readOnly />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Thunder</label>
                        <input type="number" className="form-control" 
                        id = "thunder"
                        name = "thunder"
                        value = {weapon.resistances.thunder}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Dragon</label>
                        <input type="number" className="form-control" 
                        id = "dragon"
                        name = "dragon"
                        value = {weapon.resistances.dragon}
                        readOnly />
                    </div>
                </div>
            </div> 
           
            <div className='mb-3'>
                <h4>Skills</h4>
                <hr></hr>
                {weapon.skills.length == 0 ?
                    <div>
                        <p>No skills found</p>
                    </div>
                    :<SkillsDetail skills = {weapon.skills} />
                }
            </div>
*/}
                
         
            
        </>
);
}