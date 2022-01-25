import React, { Component, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Playstore from '../Images/Playstore.svg';
import googleplay from '../Images/googleplay.svg';
import '../Css/Footer.css';
function Footer(){
    const [wwdith, setwwidth] = useState(window.innerWidth);
    return(
        <div className='footer row mt-1 pt-0 mx-auto container-fluid justify-content-center' style={{width:'90%',position:'relative', marginTop:'140px'}}>
            <div className='col-md-3'>
                <p className='foot_head' >Jadoo.</p>
                <p className='foot_data'>Book your trip in minute, get full control for much longer</p>
            </div>
            <div className='foot_col1 col-md-2 mt-3 pt-3 text-left'>
                <p className='foot_head1'>Company</p>
                <ul className='list-items '>
                    <li className='list-item'>About</li>
                    <li className='list-item'>Careers</li>
                    <li className='list-item'>Mobile</li>
                </ul>
            </div>
            <div className='col-md-2 mt-3 pt-3'>
                <p className='foot_head1'>Contact</p>
                <ul className='list-items'>
                    <li className='list-item'>Help/FAQ</li>
                    <li className='list-item'>Press</li>
                    <li className='list-item'>Affliates</li>
                </ul>
            </div>
            <div className='col-md-2 mt-3 pt-3'>
                <p className='foot_head1'>More</p>
                <ul className='list-items'>
                    <li className='list-item'>Airlinefees</li>
                    <li className='list-item'>Airline</li>
                    <li className='list-item'>Low fare tips</li>
                </ul>
            </div>
            <div className='col mt-2 pt-2 text-align-center'>
                <div className='icons col justify-content-space-between'>
                <span style={{fontSize: '40px', color:'skyblue', margin:'12px'}}  >
                <i className="fab fa-facebook-square" ></i> </span>
                <span style={{fontSize: '40px', color:'red',margin:'12px'}}  >
                <i className="fab fa-instagram"></i> </span>
                <span style={{fontSize: '40px', color:'ornage',margin:'12px'}}  >
                <i className="far fa-envelope"></i>
                </span>
           
                </div>
                <p className="discover ">Discover my app</p>
                <div className='store col' style={{marginLeft: '12px'}} >
                    <img src={Playstore} alt='playstore' width="107px" height = "35px"  />
                    <img src={googleplay} alt='googleplay' width="107px" height = "35px"/>
                </div>
            </div>

            <p className='foot_data mb-3 pb-3' style={{fontSize: '14px', textAlign:'center',marginTop:'86px'}}>All rights reserved@jadoo.co</p>
        </div>

    )
}

export default Footer; 