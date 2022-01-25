import React, { Component } from 'react';

import contain from '../Images/subscribe/contain.svg';
import mail from '../Images/subscribe/mail.svg';
import Icon from 'react-icons'
import '../Css/Subscribe.css'

function Subscribe(){
    return (
            <div className='subscribe mt-3 pt-3 mb-4 pb-4' >
                <p className='sub_head mx-4 px-4 mt-4'>Subscribe to get information, latest news and other interesting offers about cobham</p>
                <div className='row'>
               
          <img src={mail} alt='mail' width="25px" height="25px" className='sub_img'/>
      
       <input type="text" className="sub_inp form-control" placeholder="your email" />
                <button className='sub_btn btn'> Subscribe </button> 
  
                </div>

            </div>
    )
}

export default Subscribe;