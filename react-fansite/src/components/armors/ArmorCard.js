import { Link } from "react-router-dom";

export default function ArmorCard({armor}){
    return(
        <div className='col'>
            <div className='card h-100'>
                <div>
                    {/* <img 
                    className='card-img-top'
                    style={{height: '250px', objectFit: 'cover'}}
                    src={armor.assets.imageMale} alt={`${armor.name}, type of ${armor.type}`} /> */}
                </div>
                <div className='card-body'>
                    <h2 className='card-title fs-4'>Name: {armor.name} </h2>
                    <h3 className='card-subtitle fs-5 mb-2 text-body-secondary'>Type: {armor.type}</h3>
                    <ul className='card-text'>
                        <li>Rank: {armor.rank}</li>
                        <li>Rarity: {armor.rarity}</li>
                    </ul>
                </div>
                <div className='card-footer d-flex justify-content-end'>
                    <Link className='btn btn-primary me-2' to={`/armors/${armor.id}`}>Detail</Link>
                    {/* <Link className='btn btn-warning me-2' 
                    to={`/pets/edit/${pet.petId}`}>Edit</Link>
                    <Link className='btn btn-danger' 
                    to={`/pets/delete/${pet.petId}`}>Delete</Link> */}
                </div>
            </div>
        </div>
    );
}