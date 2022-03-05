import React, { useEffect } from 'react'
import M from 'materialize-css';
import skyline from '../../../../resources/AtlantaSkyline.png';

const Home = () => {

    useEffect(() => {
        let modal = document.querySelectorAll('.modal');
        let instance = M.Modal.init(modal, {});
        instance[0].open();
    }, []);


    return (
        <div>
            {/* sign up modal on page open */}
            <div id="signUpModal" className="modal">
                <a href="#!" className="modal-close waves-effect btn-flat right"><i className="material-icons">close</i></a>

                <div className="modal-content">
                    <h4>Want Free Beer?</h4>
                    <h6>Sign up for our newsletter and get entered in a raffle to win a
                        free pint every month. Plus, get great updates on events, beer
                        releases, and new breweries opening up in the area!</h6>
                    <div className='row'>
                        <form className='col s12'>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='email' type='email' className='validate' />
                                    <label htmlFor='email'>Email</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Sign Me Up!</a>
                </div>
            </div >
            {/* end sign up modal code */}

            <img src={skyline} alt='Atlanta Skyline' className='responsive-img-skyline' />
            <div className='row'>
                <div className='col s12 m6'>
                    <div className='card blue-grey darken-1'>
                        <div className="card-content white-text">
                            <span className="card-title">Our Story</span>
                            <p>Atlanta Brews was launched in the Spring of 2021 by two guys
                                who saw the richness of the Atlanta Brewery scene, but had no
                                way of planning all their visits. With a little effort, they
                                began cataloging every brewery in the greater Atlanta area, with the
                                hope of one day trying them all. We hope you find this page as useful
                                as we have. </p>
                        </div>
                    </div>
                </div>
                <div className='col s12 m6'>
                    <div className='row'>
                        <div className='col s12'>
                            <div className='card blue-grey darken-1'>
                                <div className="card-content white-text">
                                    <span className="card-title">Join Our Mailing List!</span>
                                    <p>Please email brewsatlanta@gmail.com to get updates from our site.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col s12'>
                            <div className='card blue-grey darken-1'>
                                <div className="card-content white-text">
                                    <span className="card-title">Contact Us</span>
                                    <p>Question or comment? Email brewsatlanta@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;