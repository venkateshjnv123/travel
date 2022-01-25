import React, { Component } from 'react';

// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import EmailIcon from '@material-ui/icons/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Playstore from '../Images/Playstore.svg';
import googleplay from '../Images/googleplay.svg';
import '../Css/Footer.css';
function Footer(){
    return(
        <div className='footer row mt-3 pt-3 align-items-center container-fluid text-start' style={{width:'90%'}}>
            <div className='col-md-3'>
                <p className='foot_head' >Jadoo.</p>
                <p className='foot_data'>Book your trip in minute, get full control for much longer</p>
            </div>
            <div className='col-md-2'>
                <p className='foot_head1'>Company</p>
                <ul className='list-items'>
                    <li className='list-item'>About</li>
                    <li className='list-item'>Careers</li>
                    <li className='list-item'>Mobile</li>
                </ul>
            </div>
            <div className='col-md-2'>
                <p className='foot_head1'>Contact</p>
                <ul className='list-items'>
                    <li className='list-item'>Help/FAQ</li>
                    <li className='list-item'>Press</li>
                    <li className='list-item'>Affliates</li>
                </ul>
            </div>
            <div className='col-md-2'>
                <p className='foot_head1'>More</p>
                <ul className='list-items'>
                    <li className='list-item'>Airlinefees</li>
                    <li className='list-item'>Airline</li>
                    <li className='list-item'>Low fare tips</li>
                </ul>
            </div>
            <div className='col'>
                <div className='row'>
                 <FontAwesomeIcon icon="fa-brands fa-facebook" />
                 <FontAwesomeIcon icon="fa-brands fa-instagram" />
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
           
                </div>
                <p className="discover">Discover my app</p>
                <div className='col' >
                    <img src={Playstore} alt='playstore' width="107px" height = "35px" />
                    <img src={googleplay} alt='googleplay' width="107px" height = "35px"/>
                </div>
            </div>

            <p>All rights reserved@jadoo.co</p>
        </div>

    )
}

export default Footer; 