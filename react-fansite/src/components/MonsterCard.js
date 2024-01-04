export default function MonsterCard({monster}){
    return (
        <div className='col'>
            <div className='card h-100'>
                <div>
                    {/* <img 
                    className='card-img-top'
                    style={{height: '250px', objectFit: 'cover'}}
                    src={pet.imageUrl} alt={`${pet.name}, a ${pet.breed}`} /> */}
                </div>
                <div className='card-body'>
                    <h2 className='card-title fs-4'>Name: {monster.name} </h2>
                    <h3 className='card-subtitle fs-5 mb-2 text-body-secondary'>Type: {monster.type}</h3>
                    <ul className='card-text'>
                        <li>Species: {monster.species}</li>
                        <li>Description: {monster.description}</li>
                        <li>Location: {monster.locations.name}</li>
                    </ul>
                </div>
                {/* <div className='card-footer d-flex justify-content-end'>
                    <Link className='btn btn-warning me-2' 
                    to={`/pets/edit/${pet.petId}`}>Edit</Link>
                    <Link className='btn btn-danger' 
                    to={`/pets/delete/${pet.petId}`}>Delete</Link>
                </div> */}
            </div>
        </div>
        
    );

}