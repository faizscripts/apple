import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocation} from "@fortawesome/free-solid-svg-icons/faLocation";



function Locate({setSelected}) {

    return(
        <button
            className="locate"
            onClick={() => {
                window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setSelected({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}

        >
            <FontAwesomeIcon icon={faLocation} className="fa-2x"/>
        </button>
    )
}

export default Locate