import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import data from '../../data/locations.json';
import imageph from '../../image/image-ph.jpg';
import mapph from '../../image/map-ph.jpg';

const INITIAL_LOCATION = {
    id: 0,
    name: "test",
    category: "",
    type: "",
    summary: "",
    about: "",
    description: "",
    hazards: [],
    materials: [],
    monsters: [],
    quests: [],
    images: [],
    references: [],
    maps: []
};

export default function LocationDetail() {

    const [locations, setLocations] = useState([data.locations]);
    // const [ locations, setLocations] = useState(`data.locations`);
    console.log(locations);
    const { locationId } = useParams();
    console.log(locationId);
    console.log(data);


    const [location, setLocation] = useState(INITIAL_LOCATION);

    console.log(location.name);
    // const locationData = data.locations.find((item) => item.id === locationId);
    const locationData = locations.find((item) => item.id === locationId);

    // useEffect(() => {
    //     setLocation({ locationData });
    // }, []);

    // console.log(locationData.name);
    // console.log(locationData);
    // const [location, setLocation] = useState(locationData);

    console.log(location.name);

    //     let thisLocation = data.locations.find((location) => {
    //         let aPlace = location.id === locationId;
    //         // console.log(aPlace.name);
    //         console.log(aPlace);
    //         return aPlace;
    //     });

    // console.log(thisLocation.name);

    // setLocation(locationData);

    // setLocation({
    //         name: locationData.name,
    //         category: locationData.category,
    //         type: locationData.type,
    //         summary: locationData.summary,
    //         about: locationData.about,
    //         description: locationData.description,
    //         hazards: locationData.hazards,
    //         materials: locationData.materials,
    //         monsters: locationData.monsters,
    //         quests: locationData.quests,
    //         images: locationData.images,
    //         references: locationData.references,
    //         maps: locationData.maps
    //     });

    // useEffect(() => {
    //     setLocations(data);
    // }, []);

    // const deleteItem = (id) => {
    //     const newLocations = locations.filter((item) => item.id !== locationId);
    //     setLocations(newLocations);
    // };

    // let placeName = locations[0].name;

    // const locData = data.locations.find((item) => item.id === locationId);
    // console.log('locData', locData);

    // const [ location, setLocation] = useState({});

    // const getObjectById = (locationId) => {

    // let thisLocation = data.locations.find((location) => {
    //     const aPlace = location.id === locationId;
    //     console.log(aPlace.name);
    //     return aPlace;
    // });

    // let placeName = thisLocation.name;

    // console.log(placeName);
    // const [ place, setPlace] = useState(INITIAL_LOCATION);
    // setPlace({
    //     name: thisLocation.name,
    //     category: thisLocation.category,
    //     type: thisLocation.type,
    //     summary: thisLocation.summary,
    //     about: thisLocation.about,
    //     description: thisLocation.description,
    //     hazards: thisLocation.hazards,
    //     materials: thisLocation.materials,
    //     monsters: thisLocation.monsters,
    //     quests: thisLocation.quests,
    //     images: thisLocation.images,
    //     references: thisLocation.references,
    //     maps: thisLocation.maps
    // });

    // console.log(thisLocation.name);
    //     return thisLocation;
    // };
    // console.log(thisLocation);
    // let place = getObjectById(2);
    // console.log(place);

    function phCheck(imgFileName) {
        switch (imgFileName) {
            case "image-ph.jpg":
                imgFileName = imageph;
                break;
            case "map-ph.jpg":
                imgFileName = mapph;
                break;
            default:
                imgFileName = imgFileName;
        }
        return imgFileName;
    }

    // console.log(thisLocation);
    // console.log(data.locations.location.name);

    const navigate = useNavigate();

    return (
        <>

            <div key={location.id}>
                <h1>{location.name}</h1>
            </div>

            {/* <div key={locationData.id}>
                <h1>{locationData.name}</h1>
            </div> */}

            {/* {locations.map((location) => (
            <div key={location.id}>
                            <h1>{location.name}</h1>
            </div>

        ))} */}
            {/* <h1 className='mt-3 mb-3'> {location.name} Details</h1>

            <div className='mb-3'>
                <label className='form-label'>Name</label>
                    <input type="text" className="form-control" 
                    id = "name"
                    name = "name"
                    value = {location.name}
                    readOnly />
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='form-label'>Type</label>
                    <input type="text" className="form-control" 
                    id = "type"
                    name = "type"
                    value = {location.type}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Category</label>
                    <input type="text" className="form-control" 
                    id = "category"
                    name = "category"
                    value = {location.category}
                    readOnly />
                </div>
                <div className='col'>
                    <label className='form-label'>Rarity</label>
                    <input type="text" className="form-control" 
                    id = "rarity"
                    name = "rarity"
                    value = {location.rarity}
                    readOnly />
                </div>
            </div>
            <div className='mb-3'>
                <h4>Information</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Summary</label>
                        <input type="text" className="form-control" 
                        id = "summary"
                        name = "summary"
                        value = {location.summary}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>About</label>
                        <input type="text" className="form-control" 
                        id = "about"
                        name = "about"
                        value = {location.about}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Description</label>
                        <input type="text" className="form-control" 
                        id = "description"
                        name = "description"
                        value = {location.description}
                        readOnly />
                    </div>
                </div>
            </div> */}

            {/* <div className='mb-3'>
                <h4>Resistences</h4>
                <hr></hr>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Fire</label>
                        <input type="text" className="form-control" 
                        id = "fire"
                        name = "fire"
                        value = {location.resistances.fire}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Water</label>
                        <input type="text" className="form-control" 
                        id = "water"
                        name = "water"
                        value = {location.resistances.water}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Ice</label>
                        <input type="text" className="form-control" 
                        id = "ice"
                        name = "ice"
                        value = {location.resistances.ice}
                        readOnly />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Thunder</label>
                        <input type="text" className="form-control" 
                        id = "thunder"
                        name = "thunder"
                        value = {location.resistances.thunder}
                        readOnly />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Dragon</label>
                        <input type="text" className="form-control" 
                        id = "dragon"
                        name = "dragon"
                        value = {location.resistances.dragon}
                        readOnly />
                    </div>
                </div>
            </div> */}

            {/* <div className='mb-3'>
                <h4>Skills</h4>
                <hr></hr>
                {location.skills.length == 0 ?
                    <div>
                        <p>No skills found</p>
                    </div>
                    :<SkillsDetail skills = {location.skills} />
                }
            </div> */}

            {/* <p><strong>Zones:</strong> {location.zoneCount}</p>
            <p><strong>Quests:</strong> {location.quests}</p>
            <p><strong>Hazards:</strong> {location.hazards}</p> */}

        </>
    );

}