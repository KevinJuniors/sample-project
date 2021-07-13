import React, { useEffect } from 'react';

const { kakao } = window;

const Map = () => {
    useEffect(() => {
        const container = document.getElementById('maps');
        const options = {
            center: new kakao.maps.LatLng(37.209983482558954, 127.05925954544645),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div id="maps" style={{width: "600px", height: "400px"}}></div>
    );
}

export default Map;