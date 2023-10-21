import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setCost } from '../redux/features/deliveryCost';

const libraries = ['places'];

const CheckoutMap = ({ coordinates, setCoordinates }) => {

  const [map, setMap] = useState(null);
  const [address, setAddress] = useState('');
  const [zoomLevel, setZoomLevel] = useState(14);

  const dispatch = useDispatch()

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -1.2829502,
    lng: 36.8179796,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    setZoomLevel(16);
    await calculateDirections(center, latLng);
  };

  const handleMarkerDragEnd = async (e) => {
    const newLatLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };

    setCoordinates(newLatLng);
    await calculateDirections(center, newLatLng);
    geocodeByAddress(`${newLatLng.lat},${newLatLng.lng}`)
        .then((results) => {
            if (results.length > 0) {
                const address = results[0].formatted_address;
                setAddress(address);
            }
        });

    if (map) {
        setZoomLevel(map.getZoom());
    }
  };

  const calculateDirections = async (origin, destination) => {

      const directionsService = new google.maps.DirectionsService();

      const result = await directionsService.route({
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
      });

      const deliveryFee = calculateDeliveryFee(result.routes[0].legs[0].distance.value / 1000);
      dispatch(setCost(deliveryFee))
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

  return isLoaded ? (
      <>
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            searchOptions={{ componentRestrictions: { country: 'ke' } }}
            onSelect={handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                    required
                    className="form-control mb-3"
                    {...getInputProps({
                      placeholder: 'Enter an address',
                    })}/>
                <div>
                  {loading ? <div>Loading...</div> : null}
                  {suggestions.map((suggestion) => {
                    return (
                        <div
                            key={suggestion.description}
                            {...getSuggestionItemProps(suggestion, { className: 'map-suggestions' })}
                        >
                          {suggestion.description}
                        </div>
                    );
                  })}
                </div>
              </div>
          )}
        </PlacesAutocomplete>

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates.lat !== null ? coordinates : center}
            zoom={zoomLevel}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}
            onLoad={onLoad}
            onUnmount={onUnmount}>
          {coordinates.lat !== null && (
              <Marker
                  position={coordinates}
                  draggable={true}
                  onDragEnd={handleMarkerDragEnd} />
            )}
        </GoogleMap>
      </>
  ) : <div>Loading...</div>;
};

export default CheckoutMap;
