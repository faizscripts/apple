import {Box} from "@chakra-ui/react";
import GoogleMapReact from "google-map-react"


function Map() {
    return(
        <Box width={"full"} height={"full"}>

            <GoogleMapReact
                bootstrapURLKeys={{key : "AIzaSyAl0Uzc3vtr4IMDZOEj-1mB-kSHN6BsYx4"}}
                defaultCenter={{latitude: -1.283733332480186 , longitude: 36.827665514486654}}
                center={{latitude: -1.283733332480186 , longitude: 36.827665514486654}}
                defaultZoom={15}
                margin={[50,50,50,50]}
                options={""}
                onChange={() => {}}
                onChildClick={() => {}}
            >

            </GoogleMapReact>

        </Box>
    )
}

export default Map