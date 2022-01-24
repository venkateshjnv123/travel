import React, { Component } from 'react';

import traveler from '../Images/traveller.svg';
import play from '../Images/playbutton.svg';
import '../Css/Home.css';
function Home() {
    return(
      
        <div className='row '>
            <div className='col-md-6'>
                <p className='heading pt-5 mt-5'>Best Destinations in the world</p>
                <p className='heading1 pt-1 mt-1 '>Travel , enjoy and live a new and full life</p>
                <p className='heading2 pt-1 mt-1 '>Built Wicket longer admire do barton vanity itself do in it.Preferred to sportsmen it engrossed listening.Park gate sell they west hard for the</p>
                
                <button className="btn1 btn">Find out more</button>
                <span className="span1 display-inline">
                <img src={play} alt='play demo'/>
                Play demo
                </span>
              
            </div>
            
            <div className='col-md-5' >
                <img src={traveler} alt='traveller'>
                </img>
            </div>

        </div>
       
    )
}

export default Home;