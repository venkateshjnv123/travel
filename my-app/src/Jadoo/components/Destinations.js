import React, { Component } from 'react';

import rome from '../Images/destinations/rome.svg';
import go from '../Images/destinations/go.svg';
import london from '../Images/destinations/london.svg';
import europe from '../Images/destinations/europe.svg';

import '../Css/Destination.css' ;
function Destination() {
    const destinations =[
        {
            id:1,
            city: 'Rome',
            Country:'Italy',
            Trip : '10 days Trip',
            amount: '$5,42k',
            img : rome,
        },
        {
            id:3,
            city: 'London',
            Country:'UK',
            Trip : '12 days Trip',
            amount: '$4.2k',
            img : london,
        },
        {
            id:3,
            city: 'Full ',
            Country:'Europe',
            Trip : '28 days Trip',
            amount: '$15k',
            img : europe,
        },

    ]

    return (
        <div className='destination my-2 py-2'>
        <p className='des_head'>Top Selling</p>
        <p className='dessubhead' >Top Destinations</p>
        <div className='row fs-6 mx-auto mt-4 pt-5' style={{width: '90%', justifyContent:'center'}} >
   { destinations.map((item) => (
      <div key={item.id} className='containdes col-lg-3 col-md-6 mb-3 mx-4 py-5 '  style={{position:'relative'}}>
          <center>
          <img src={item.img} alt={item.head} />
          <div className='card-des mx-auto card'  >
                  <div className='card-body justify-content-space-between mb-3 pb-4'>
                      <p className='card-title' style={{float: 'left'}} >
                          {item.city}, {item.Country}
                      </p>
                      <p className='card-text' style={{float:'right'}}>
                          {item.amount}
                      </p>
                      </div>
                  <span className='pb-2 mx-3 my-1 px-3' style={{float:'left'}} > 
                      <img src={go} alt='go'/> {item.Trip}                  
                      </span>
                    
             
              </div>
              </center>
            

      </div>
   ))}
   </div>
    </div>
)
   }

export default Destination ;