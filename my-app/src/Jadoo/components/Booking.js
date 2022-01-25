import React, { Component, useState } from 'react';

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
import loading from '../Images/Booking/loading.svg';
import '../Css/Booking.css'
function Booking(){
    const [wwdith, setwwidth] = useState(window.innerWidth);
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
<div className='booking row mt-1 pt-1 mx-auto' style={{width:'90%'}}>
    <div className='bookcol col-md-8 col-lg-6 justify-content-flex-start mb-5 pb-5 '> 
        <p className='booksubhead my-1 py-1'>Easy and Fast</p>
        <p className='bookhead my-1 py-1'>Book Your Next Trip</p>
        <p className='bookhead my-1 py-1'>In 3 Easy Steps</p>
        <div className='col mx-auto ml-2' style={{width:'90%'}} >
            {perks.map((item) => (
                <div className='row align-items-center text-left justify-content-flex-start' key={item.id}>
                    <div className='col-md-2 text-left'>
                        <img src={item.img} alt={item.head}  />
                        </div>
                    <div className='col-md-9 mt-2 text-left'>
                        <p className='bookcardhead'> {item.head}</p>
                        <p className='bookcarddata'>{item.data}</p>
                        </div>
                </div>
            ))}
        </div>

    </div>
  
    <div className='col-md-4 col-lg-4 justify-content-center' style={{position:'relative'}}>
        {wwdith >600 ? <img src={back} alt="background" className='backimg_book'/> : <></>}
        
    <div className='bookcard card mx-auto py-2 mx-3 px-4 ' >
                
                      <img src={journey} alt='journey' className='my-2 py-2 mx-2 my-2'/>
                      <div className='card-body text-aling-left'>
                          <p className='bookcard-title card-title' >
                              Trip To Greece
                          </p>
                          <p className='bookcard-text card-text'>
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
                                <img src={heart} alt='heart' style={{float:'right'}}/>
                            </span>
                      </div>

                  </div>
        <div className='subcard row align-items-center text-left justify-content-flex-start' >
            <div className='col-md-3'>{
                wwdith >700 ? <img src={mask} alt='mask' className='mask'/> : <></>
            }
                
            </div>
            {
                wwdith < 300 ? <></> :
                <div className='col-md-9 pt-1'>
                <p className='ongoing p-0 m-0'>ongoing</p>
                <p className='ongoing p-0 m-0' style={{fontSize: '18px', color:'#080809'}}>Trip to rome</p>
                <p className='ongoing p-0 m-0' style={{fontSize: '14px', color: '#8A79DF'}}> 40% completed</p>
                <img src={loading} alt='loading'  className='p-0 m-0'/>
            </div>
            }
            

        </div>
    </div>

</div>
    )
}

export default Booking;