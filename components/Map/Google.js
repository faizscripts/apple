import {useLoadScript, GoogleMap, Marker, Autocomplete} from "@react-google-maps/api";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useCallback, useMemo, useRef, useState} from "react";
import Locate from "./Locate";
import {getGeocode, getLatLng} from "use-places-autocomplete";


const libraries= ["places"];

function Google() {

    const mapRef = useRef()

    const center = useMemo(() => (
        {lat: -1.283733332480186, lng: 36.827665514486654}
    ),[])

    const options = useMemo(() => (
        {disableDefaultUI: true,
        zoomControl: true,
        clickableIcons: false}
    ),[])

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;

    }, [])


    const [windowDimension] = useWindowDimensions()

    const renderWidth = () => {
        if (windowDimension){
            const {width} = windowDimension
            return width <= 768 ? '85vw' : '70vw'
        }else return null
    }

    const mapContainerStyle= {
        width: renderWidth(),
        height: '500px',
    }

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries,
    })


    const [value, setValue] = useState('')
    const[selected, setSelected] = useState({})


    if (loadError) return "Error Loading maps";
    if (!isLoaded) return "Loading Maps";

    const handleSelect = async (val) => {
        setValue(val);

        const results = await getGeocode({address: val})
        const {lat, lng} = await getLatLng(results[0])
        setSelected({lat, lng})

    }

    return(
        <div>

            <Locate setSelected={(position) => {
                setSelected(position);
                mapRef.current.panTo(position);
            }}/>

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
                {selected && <Marker position={selected} />}

                <Autocomplete onPlaceChanged={handleSelect}>
                    <input
                        type="text"
                        placeholder="Enter Your Location"
                        className="search-map"
                        onChange={(event) => {
                            setValue(event.target.value)
                        }}
                        value={value}
                    />

                </Autocomplete>
            
            </GoogleMap>
        </div>
    )
}

export default Google