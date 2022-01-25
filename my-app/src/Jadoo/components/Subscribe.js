import React, { Component , useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import contain from '../Images/subscribe/contain.svg';
import mail from '../Images/subscribe/mail.svg';
import Icon from 'react-icons'
import '../Css/Subscribe.css'

function Subscribe(){
    const [wwdith, setwwidth] = useState(window.innerWidth);
    return (
            <div className='subscribe col-md-10 col-lg-8 mt-1 pt-1 mb-1 pb-1' style={{position:'relative', width:'90%'}} >
                <img src={contain} alt='container' className="subs_img"/>
                <div className='subs_fold justify-content-center'>
                <p className='sub_head mx-1 px-1 mt-4'>Subscribe to get information, latest news and other interesting offers about cobham</p>
            <div className='row align-items-center mx-2 px-2'>
               {wwdith > 350 ?<FontAwesomeIcon icon={faEnvelope} style={{width:'50px', height:'50px'}} /> :<></>}
            
            <input type="text" className="sub_inp form-control" placeholder="your email" />
            <button className='sub_btn btn '> Subscribe </button> 
  
                </div>
</div>
            </div>
    )
}

export default Subscribe;