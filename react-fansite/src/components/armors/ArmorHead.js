import ArmorCard from "../armors/ArmorCard";
import { Link, useLocation } from "react-router-dom";

export default function ArmorHead(){
    const location = useLocation();

    const { headList } = location.state;

    let armors = [];


    Object.values(headList).map(arms => {
        arms.map(armor => {
           armors.push(armor);
        })
    })
   


    return(
        <>  
            <div className="d-flex justify-content-end">
                <Link className="btn btn-warning mb-3" to="/armors">Back</Link>
            </div>
            
            <h1 className="mb-3">Heads</h1>
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