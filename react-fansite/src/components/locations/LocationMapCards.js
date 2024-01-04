import { useState } from "react";
import data from '../../data/locations.json';
import LocationMapCard from "./LocationMapCard";

export default function LocationMaps({locationMap}){
    const [locationMaps, setMaps] = useState(data.locations);
    console.log(data);

    return (
        <div>
            <h1>Maps</h1>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {locationMaps.map(locationMap => {
                    return <LocationMapCard locationMapCard={locationMap} key={locationMap.id}/>
                })}
            </div>
            
        </div>
    );
}