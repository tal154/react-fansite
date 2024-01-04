import imageph from '../../image/image-ph.jpg';
import mapph from '../../image/map-ph.jpg';
import { Link } from "react-router-dom";

export default function LocationCard({location}){

    function phCheck(imgFileName){
        switch(imgFileName){
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

    return (
        <div className='col'>
            <div className='card h-100'>
                <div>
                    <img 
                    className='card-img-top'
                    style={{height: '250px', objectFit: 'cover'}}
                    src={`${phCheck(location.images[0].url)}`} alt={`${location.images[0].altText}`} />
                </div>
                <div className='card-body'>
                    <h1 className='card-title fs-4'>{location.name}</h1>
                    <p><strong>Category:</strong> {location.category}
                    {/* </p>
                    <p> */}
                        <br />
                        <strong>Type:</strong> {location.type}</p>
 
                    <p><strong>Summary:</strong><br />
                    {location.summary}
                    </p>
                </div>
                {/* <div className='card-footer d-flex justify-content-end'>
                    <Link className='btn btn-primary me-2 btn-sm' to={`/locations/${location.id}`}>Details</Link>
                </div> */}
            </div>
        </div>
        
    );

}