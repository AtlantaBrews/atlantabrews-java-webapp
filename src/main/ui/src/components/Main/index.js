import React from 'react';
import Home from './pages/Home';
import All from './pages/All';
import Random from './pages/Random';
import Map from './pages/Map';


const Main = (props) => {

    if (props.mainPage == 'Home' || props.mainPage == 'HomeMobile') {
        return <Home />
    } else if (props.mainPage == 'All' || props.mainPage == 'AllMobile') {
        return <All />
    } else if (props.mainPage == 'Random' || props.mainPage == 'RandomMobile') {
        return <Random />
    } else if (props.mainPage == 'Map' || props.mainPage == 'MapMobile') {
        return <Map />
    }

};

export default Main;