import React, { useCallback, useEffect, useRef } from "react";
import '../sass/MapComponent.scss';

function MapComponent() {
    const mapRef = useRef();

    const initMap = useCallback(() => {
        new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.517711987620665, lng: 126.88631243659493 },
        zoom: 17,
        });
    }, [mapRef]);

    useEffect(() => {
        initMap();
        let div = document.querySelector(".map");
        div.style.height = window.innerHeight - 193.5 + "px";
    }, [initMap]);

    return (
        <div className="map">
            <div className="map" style={{ width: "100%", height: "100%" }} ref={mapRef}></div>
        </div>
    );
}

export default MapComponent;