import React, {useRef} from 'react';
import {GoogleMap, LoadScript, MarkerF, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useState} from "react";
import {faMultiply} from "@fortawesome/free-solid-svg-icons/faMultiply";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {setCost} from "../../redux/features/deliveryCost";

const MapWithAutocomplete = () => {
    const [directionResponse, setDirectionsResponse] = useState(null);
    const [distance,setDistance] = useState('')

    const center = { lat: -1.2836946, lng: 36.8287868};

    const destinationRef = useRef()

    const dispatch = useDispatch()

   async function calculateRoute(e){
        e.preventDefault()

        if (destinationRef.current.value === ''){
            return
        }

        const directionsService = new google.maps.DirectionsService()

         const results = await directionsService.route({
             origin: new google.maps.LatLng(center.lat, center.lng),
             destination:destinationRef.current.value,
             travelMode:google.maps.TravelMode.DRIVING,
         })

       const calculatedDistanceInMeters = results.routes[0].legs[0].distance.value;

       const calculatedDistanceInKilometers = calculatedDistanceInMeters / 1000;

       const costInKsh = Math.max(calculatedDistanceInKilometers * 70, 100);

       const roundedCostInKsh = Math.ceil(costInKsh);
       setDistance(`${calculatedDistanceInKilometers} kilometers`);

       dispatch(setCost(roundedCostInKsh))
       console.log(distance)

       setDirectionsResponse(results);
}

    function clearRoute(e) {
        e.preventDefault();
        setDirectionsResponse(null);
        setDistance('');
        destinationRef.current.value = '';
    }

    const [windowDimension] = useWindowDimensions()

    const renderWidth = () => {
        if (windowDimension){
            const {width} = windowDimension
            return width <= 768 ? '85vw' : '70vw'
        }else return null
    }

    const mapStyles = {
        height: '400px',
        width: renderWidth(),
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            libraries={['places']}
        >
            <div className='mb-3 position-relative d-flex'>
                <Autocomplete
                    onLoad={(autocomplete) => console.log(autocomplete)}
                    options={{
                        types: ['geocode'],
                        componentRestrictions: { country: 'ke' },
                    }}
                >
                    <input style={{height:'100%',marginRight:'150px',width:'100%'}} type="text" ref={destinationRef} placeholder="Search places"/>
                </Autocomplete>
                <button type="submit" className="btn btn-primary mx-2" id="confirm info" onClick={calculateRoute}>Confirm Info
                </button>
                <button type="button" className="btn btn-danger" onClick={clearRoute}><FontAwesomeIcon icon={faMultiply}/></button>
            </div>
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={center}
                zoom={15}
                options={{
                    streetViewControl: false,
                    zoomControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
            >
                <MarkerF
                    position={center}
                />
                {directionResponse !== null && (
                    <DirectionsRenderer directions={directionResponse}/>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapWithAutocomplete;

