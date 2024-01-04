import { useState } from "react";
import data from '../../data/locations.json';
import LocationCard from "./LocationCard";

export default function LocationList({location}){
    const [locations, setLocations] = useState(data.locations);

    return (

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {locations.map(location => {
                    return <LocationCard location={location} key={location.id}/>
                })}
            </div>

    );
}