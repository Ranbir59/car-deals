import React from 'react'
import '../CSS/Reviews.css'
import test from '../Images/test.jpg'
import test2 from '../Images/Test2.webp'
import test3 from '../Images/test3.jpg'
import test4 from '../Images/test4.jpg'
import test5 from '../Images/test5.jpg'
import test6 from '../Images/test6.jpg'
import test7 from '../Images/test7.jpg'
import test8 from '../Images/test8.jpg'
import { motion } from "framer-motion";





const Reviews = () => {
  return (
    <>
    <motion.div className="Reviews-container"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x : window.innerHeight ,transition:{duration: 0.1}}}>
      <div className="row">
        <div className="col-md-12 text-center">

    <h1 className='Cush'>TESTIMONIALS</h1>
    <hr className='Rhr'/>
        </div>
        <div className="col-md-6">
        <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="Cardp ">"Always available, extremely knowledgeable, and a tremendous "can-do" attitude. Your company was on a tight timeline highly recommended."</p>
        <h5 className="cardname me-5 text-md-end ">James	Mary</h5>
      
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="col-md-6">
        <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test2} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="Cardp ">"Your thoughtfulness and support of MPCC is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in MPCC will be justified. Without any hesitation... highly recommended."</p>
        <h5 className="cardname me-5 text-md-end">	Robert	Patricia</h5>
       
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="col-md-6">  <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test3} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="Cardp ">"The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in the area of web, technology and training."</p>
        <h5 className="cardname me-5 text-md-end">John	Jennifer</h5>
       
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-6">  <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test4} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="Cardp ">"CarDeals Communications is attentive, personable, and professional. Will and his team provide great support for my company's needs."</p>
        <h5 className="cardname me-5 text-md-end">William Sophia</h5>
       
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-6">  <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test5} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="Cardp ">"Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab Communciations as our online partner"</p>
        <h5 className="cardname me-5 text-md-end">Henry	Evelyn</h5>
       
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-6">  <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test6} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="Cardp ">"It is a pleasure working with Will. He is extremely knowledgeable, business savvy, and positive. His approach to challenges and opportunities is innovative. He is highly productive and consistently delivers as promised. And to top it all off, he is gracious, kind, and insightful."</p>
        <h5 className="cardname  me-5 text-md-end " >Liam	Olivia</h5>
       
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-6">  <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test7} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="cCardp ">"Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal. He is absolutely one of the best...if not THE best!"</p>
        <h5 className="cardname  me-5 text-md-end " >Jeff Adams</h5>
       
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-6">  <div className="cardr mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={test8} className="imgtest rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="Cardp ">"Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today's market."</p>
        <h5 className="cardname  me-5 text-md-end " >Adam Mohr</h5>
       
      </div>
    </div>
  </div>
</div>
</div>


      </div>
      
      
    </motion.div>
    </>
  )
}

export default Reviews
