import { Link } from "react-router-dom";

export default function WeaponCard({weapon}){
    return (
        <div className='col'>
            <div className='card h-100'>
                <div className='card-body'>
                    <h2 className='card-title fs-4'>Name: {weapon.name}</h2>
                    <h3 className='card-subtitle fs-5 mb-2 text-body-secondary'>Type: {weapon.type}</h3>
                </div>
                    <div className='card-footer d-flex justify-content-end'>
                    <Link className='btn btn-primary me-2' to={`/weapons/${weapon.id}`}>Detail</Link>
                </div>
            </div>
        </div>
        
    );

}