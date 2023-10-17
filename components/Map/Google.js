import React, { useEffect, useRef } from 'react';
import {GoogleMap, LoadScript, MarkerF, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useState} from "react";
import {faMultiply} from "@fortawesome/free-solid-svg-icons/faMultiply";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {setCost} from "../../redux/features/deliveryCost";

const libraries = ['places']

const MapWithAutocomplete = () => {
    const destinationRef = useRef()
    const dispatch = useDispatch()
    const [directionResponse, setDirectionsResponse] = useState(null);

    const center = { lat: -1.2829502, lng: 36.8179796};

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

       const calculatedDistance = results.routes[0].legs[0].distance.value / 1000;

       const deliveryFee = calculateDeliveryFee(calculatedDistance);
        console.log('distance', calculatedDistance)
        console.log('deliveryFee', deliveryFee)

       dispatch(setCost(deliveryFee))

       setDirectionsResponse(results);
}

    function clearRoute(e) {
        e.preventDefault();
        setDirectionsResponse(null);
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

    const calculateDeliveryFee = (distance) => {
        if (distance <= 2) {
            return 100;
        } else if (distance <= 4) {
            return 200;
        } else if (distance <= 6) {
            return 250;
        } else if (distance <= 8) {
            return 300;
        } else if (distance <= 10) {
            return 350;
        } else if (distance <= 17) {
            return 400;
        } else {
            return 500;
        }
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            libraries={libraries}>
            <div className='mb-3 position-relative d-flex'>
                <Autocomplete
                    options={{
                        types: ['geocode'],
                        componentRestrictions: { country: 'ke' },
                    }}>
                    <input style={{height:'100%',marginRight:'150px',width:'100%'}} type="text" ref={destinationRef} placeholder="Search places" className="form-control" />
                </Autocomplete>
                <button type="submit" className="btn btn-primary mx-2" id="confirm info" onClick={calculateRoute}>
                    Confirm
                </button>
                <button type="button" className="btn btn-danger" onClick={clearRoute}><FontAwesomeIcon icon={faMultiply}/></button>
            </div>
            <GoogleMap
                mapContainerClassName="custom-map-styles"
                mapContainerStyle={mapStyles}
                center={center}
                zoom={15}
                options={{
                    streetViewControl: false,
                    zoomControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}>
                <MarkerF position={center}/>
                {directionResponse !== null && (
                    <DirectionsRenderer directions={directionResponse}/>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapWithAutocomplete;

