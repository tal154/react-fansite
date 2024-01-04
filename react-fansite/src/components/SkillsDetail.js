export default function SkillsDetail( {skills} ){
    return(
        <>
        {skills.map(skill => (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className='col'>
                    <div className='card h-100'>
                        <div className='card-body'>
                            <h2 className='card-title fs-4'>{skill.skillName} </h2>
                            <ul className='card-text'>
                                <li>Level: {skill.level}</li>
                                <li>Skill: {skill.skill}</li>
                                <li>Description:<br /> {skill.description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        ))}
        
        </>
        

       
    );
}