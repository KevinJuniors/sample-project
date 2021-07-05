import React, { Component } from "react";
import styled from "styled-components";

class Mapcontents extends Component {
    componentDidMount() {
        const script = document.createElement("script");
            script.async = true;
            script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=45a533d9ab3bfd9f8a71c56c4b0427f4&autoload=false";
        document.head.appendChild(script);
    }

    render() {
        return <Mapcontents id="kakaomaps" />;
    }
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default Mapcontents;