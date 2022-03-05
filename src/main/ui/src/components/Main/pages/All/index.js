import React from 'react'
import BreweryAndDesc from '../../../../resources/BreweryAndDesc.json';

const All = () => {

    const BreweryListCards = BreweryAndDesc.data.map((brewery) =>
        <div className='col s12 m6 l3 allBrewCards'>
            <div className='card small blue-grey darken-1'>
                <div className="card-content white-text">
                    <span className="card-title">{brewery.name}</span>
                    <p>{brewery.description}</p>
                    <a className='waves-effect waves-light btn' href={brewery.website} target='_blank' rel='noreferrer'>Brewery Website</a>
                </div>
            </div>
        </div>
    );

    return (
        <div className='row'>{BreweryListCards}</div>
    );
}

export default All;