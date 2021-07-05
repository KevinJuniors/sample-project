import React, { Component } from "react";
// import styled from "styled-components";

class MapContent extends Component {
    componentDidMount() {
        const script = document.createElement("script");
            script.async = true;
            script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=45a533d9ab3bfd9f8a71c56c4b0427f4&autoload=false";
        document.head.appendChild(script);
        
        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("kakaomaps");
            });
        };
    }

    render() {
        return <MapContent id="kakaomaps" />;
    }
}

export default MapContent;