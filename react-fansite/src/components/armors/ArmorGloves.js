import { Link, useLocation } from "react-router-dom";
import ArmorCard from "../armors/ArmorCard";

export default function ArmorGloves(){
    const location = useLocation();

    const { glovesList } = location.state;

    let armors = [];


    Object.values(glovesList).map(arms => {
        arms.map(armor => {
           armors.push(armor);
        })
    })
   


    return(
        <>  
            <div className="d-flex justify-content-end">
                <Link className="btn btn-warning mb-3" to="/armors">Back</Link>
            </div>
            
            <h1 className="mb-3">Glovess</h1>
            <div className="mb-3">
             <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {  armors.map(armor => {
                        return <ArmorCard armor={armor} key={armor.id}/>
                    })
                }
            </div>
        </div>
        </>
        

    );
    
}