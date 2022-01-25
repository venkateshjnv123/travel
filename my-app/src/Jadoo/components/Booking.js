import React, { Component } from 'react';

import destination from '../Images/Booking/destination.svg';
import payment from '../Images/Booking/payment.svg';
import reach from '../Images/Booking/reach.svg';
import journey from '../Images/Booking/journey.svg';
import icon1 from '../Images/Booking/icon1.svg';
import icon2 from '../Images/Booking/icon2.svg';
import icon3 from '../Images/Booking/icon3.svg';
import building from '../Images/Booking/building.svg';
import heart from '../Images/Booking/heart.svg';
import mask from '../Images/Booking/mask.svg';
import back from '../Images/Booking/back.svg';
import '../Css/Booking.css'
function Booking(){
    const perks =[
        {id:1,
         img: destination,
         head: 'Choose destination',
         data: 'Lorem ipsum dolor sit aamet, caonseture adipiscing elit. Urna, torot tempus'
        },
        {id:2,
            img: payment,
            head: 'Make payment',
            data: 'Lorem ipsum dolor sit aamet, caonseture adipiscing elit. Urna, torot tempus'
           },
           {id:3,
            img: reach,
            head: 'Reach Airport on Seected Date',
            data: 'Lorem ipsum dolor sit aamet, caonseture adipiscing elit. Urna, torot tempus'
           }
    ]
    return (
<div className='booking row mb-5 pb-5' >
    <div className='col-md-8 col-lg-6'>
        <p className='booksubhead my-1 py-1'>Easy and Fast</p>
        <p className='bookhead my-1 py-1'>Book Your Next Trip</p>
        <p className='bookhead my-1 py-1'>In 3 Easy Steps</p>
        <div className='col mx-auto ml-2' style={{width:'90%'}} >
            {perks.map((item) => (
                <div className='row align-items-center text-left justify-content-flex-start' key={item.id}>
                    <div className='col-md-2'>
                        <img src={item.img} alt={item.head} />
                        </div>
                    <div className='col mt-2 text-left'>
                        <p className='bookcardhead'> {item.head}</p>
                        <p className='bookcarddata'>{item.data}</p>
                        </div>
                </div>
            ))}
        </div>

    </div>
  
    <div className='col-md-6 col-lg-4' style={{position:'relative'}}>
        <img src={back} alt="background"  />
    <div className='bookcard card mx-auto py-2 mx-3 px-4 ' >
                
                      <img src={journey} alt='journey' className='my-2 py-2 mx-2 my-2'/>
                      <div className='card-body'>
                          <p className='card-title' >
                              Trip To Greece
                          </p>
                          <p className='card-text'>
                              14-29 June| by Robbin joseph
                          </p>
                          <span>
                            <img src={icon1} alt='icon'/>
                            <img src={icon2} alt='icon'/>
                            <img src={icon3} alt='icon'/>
                          </span>
                          <br>
                          </br>
                            <span>
                                <img src={building} alt='img'/> 24 people going 
                                <img src={heart} alt='heart'/>
                            </span>
                      </div>

                  </div>
        <div className='subcard row align-items-center text-left justify-content-flex-start' >
            <div className='col-md-3'>
                <img src={mask} alt='mask'/>
            </div>
            <div className='col-md-9 mt-2'>
                <p>ongoing</p>
                <p>Trip to rome</p>
                <p> 40% completed</p>
            </div>

        </div>
    </div>

</div>
    )
}

export default Booking;