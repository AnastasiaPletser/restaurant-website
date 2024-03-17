import React from 'react';
import './about.css';
import aboutImage from '../../public/assets/images/about.jpg';
import Image from 'next/image';

export default function About () {
    return ( 
        <section id="about" className="about">
    <div className="container" data-aos="fade-up">
    <div className="row" id='row'>
        
    <div 
    className="col-lg-6 order-1 order-lg-2" 
    data-aos="zoom-in" 
    data-aos-delay="100"
    >
    <div className="about-img">
    <Image src={aboutImage} alt=''/>
    {/* <img src='' alt=''/> */}
     </div>
     </div>
    
    <div className="col-Ig-6 pt-4 pt-lg-0 order-2 order-lg-1 content"> 
    <h3>
    Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
    </h3>
    <p className="fst-italic">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <ul>
        <li> Voluptatem dignissimos provident</li>
        <li> Voluptatem dignissimos provident</li>
        <li> Voluptatem dignissimos provident</li>
        
        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere tempora itaque, voluptatibus reprehenderit perferendis possimus temporibus nostrum enim dolor similique pariatur delectus repellat quaerat quos neque? Debitis, dignissimos fuga.</i>
        
   </ul> 
   </div>
   </div>
   </div>

   </section>
   )
}
