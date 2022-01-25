import React, { Component } from 'react';

import weather from '../Images/categoryimg/weather.svg';
import events from '../Images/categoryimg/events.svg';
import flights from '../Images/categoryimg/flights.svg';
import custom from '../Images/categoryimg/custom.svg';
import reactangle from '../Images/categoryimg/reactangle.svg';
import style from '../Images/categoryimg/style.svg';
import '../Css/Category.css';
function Category(){
    const categories = [
        {
            id:1,
            head: 'Calculated Weather',
            data: 'Built Wicket longer admire do barton anity itself do in it',
            img: weather,
            active : false,
        },
        {
            id:2,
            head: 'Best Flights',
            data: 'Engrossed listening.Park gate sell they west hard for the.',
            img: flights,
            active: true,
        },
        {
            id:3,
            head: 'Local Events',
            data: 'Barton vanity itself do in it.prefered to men it engrossed listening',
            img: events,
            active: false,
        },
        {
            id:4,
            head: 'Customization',
            data: 'We deliver outsourced aviation services for military customers',
            img: custom,
            active: false
        }
    ]
    return(
        <div className='category mt-2 pt-2 justify-content-center'>
             <img className='cat_img' src={style} alt="styling" />
            <p className='cat_head'>category</p>
           
            <p className='catsubhead' > We Offer Best Services</p>
            <div className='row fs-6 mx-auto mt-4 pt-5' style={{width: '90%'}} >
       { categories.map((item) => (
          <div key={item.id} className='col-lg-3 col-md-6 mb-3' >
              <div className='card-cat card mx-auto py-2' data-aos-duration='1000' >
                  <center>
                      <img src={item.img} alt={item.head} className='my-2 py-2' width="90px" height="90px"/>
                      <div className='card-body'>
                          <p className='ccard-title' >
                              {item.head}
                          </p>
                          <p className='ccard-text'>
                              {item.data}
                          </p>
                      </div>
                  </center>
                  </div>
               {
                   item.active ? <div> <img src={reactangle} alt='img' className="active" /></div>
 : <></>               } 

          </div>
       ))}
       </div>
        </div>
    )
}

export default Category;