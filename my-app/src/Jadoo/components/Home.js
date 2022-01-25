import React, { Component, useState } from 'react';

import traveler from '../Images/traveller.svg';
import play from '../Images/playbutton.svg';
import '../Css/Home.css';
function Home() {
    const [wwidth, setwwidth] = useState(window.innerWidth);
    return(
      
        <div className='home row mx-auto' style={{width:'90%'}}>
            <div className='column1 col-md-7 justify-content-flex-start'>
                <p className='heading pt-5 mt-5'>Best Destinations in the world</p>
                <p className='heading1 pt-1 mt-1 '>Travel , enjoy and live a new and full life</p>
                <p className='heading2 pt-1 mt-1 '>Built Wicket longer admire do barton vanity itself do in it.Preferred to sportsmen it engrossed listening.Park gate sell they west hard for the</p>
                
                <button className="btn1 btn">Find out more</button>
                {
                    wwidth < 600 ? <br></br> : <></>
                }
                <span className="span1 display-inline">
                <img src={play} alt='play demo'/>
                Play demo
                </span>
            </div>
            
            <div className='col-md-5' >
                <img src={traveler} alt='traveller' className='home_img'>
                </img>
            </div>

        </div>
       
    )
}

export default Home;