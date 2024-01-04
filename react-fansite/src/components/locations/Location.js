import { useState } from "react";
import LocationList from "./LocationList";
// import data from '../../data/locations.json';

export default function Location({location}){
    // const [locations, setLocations] = useState(data.locations);

    return (
        <div id="locations">
            <h1>Locations</h1>
            <LocationList />
        </div>
    );
}