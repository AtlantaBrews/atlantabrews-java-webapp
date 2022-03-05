import React, { useState, useEffect } from 'react'
import M from 'materialize-css';
import breweryList from '../../../../resources/BreweryAndDesc.json';

const Random = () => {

    const [triggerRandom, setTriggerRandom] = useState(0);
    const [randomBreweryName, setRandomBreweryName] = useState('');

    useEffect(() => {
        let modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});
    }, []);

    useEffect(() => {
        const total = breweryList.data.length;
        const random = Math.floor(Math.random() * total);
        setRandomBreweryName(breweryList.data[random].name)
    }, [triggerRandom]);

    const modalClick = (e) => {
        if (triggerRandom == 0) {
            setTriggerRandom(1);
        } else if (triggerRandom == 1) {
            setTriggerRandom(0);
        }
    };




    return (
        <div>
            <a className="waves-effect waves-light btn modal-trigger" onClick={modalClick} href="#modal1">Choose A Random Brewery!!</a>

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Your Random Brewery is:</h4>
                    <p>{randomBreweryName}</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Awesome!</a>
                </div>
            </div>
        </div>
    );
}

export default Random;