import React from 'react'
import '../CSS/footer1.css'
import Pay from '../Images/pay2.png'


const Footer1 = () => {
  return (
    <>
      <footer className='footer pt-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-3 ">  
               
                 <h1 className="headingh1 text-md-start"><span className='spanf '>Car</span>Deals</h1>
              
               
                    <ul className='Listd list-unstyled text-md-start '>
                        <li>Fatehgarh Sahib,Punjab</li>
                        <li>Tel: 9090235911</li>
                        <li>EMAIL: cardeals59@gmail.com</li>

                     
                    </ul>
                    </div>
                <div className="col-md-3">
                    <h3 className="headingf">Services</h3>
                    <hr />
                    <ul className='List list-unstyled'>
                        <li>24/7 Service</li>
                        <li>Pickup Service </li>
                        <li>Paint Coating </li>
                        <li>Phone Assistance </li>

                    </ul>
                </div>
                <div className="col-md-3">
                <h3 className="headingf">Helpful Links</h3>
                    <hr />
                    <ul className='List list-unstyled'>
                        <li>Blog</li>
                        <li>Pricing</li>
                        <li>Sales </li>
                        <li>Services </li>

                    </ul>
                </div>
                <div className="col-md-3">
                <h3 className="headingf">Privacy</h3>
                <hr />
                    
                    <ul className='List list-unstyled'>
                        <li>Career </li>
                        <li>Privacy& policy </li>
                        <li>Terms</li>
                        <li>Conditions </li>

                    </ul>
                </div>


            </div>
        </div>
        <hr />
         {/* SOCIAL MEDIA LINKS */}

         <div className="row">
            <div className="col-md-4">
                <h1 className='call'>Call us today</h1>
                <h1>+91-98765432</h1>
            </div>
            <div className="col-md-4">
               <h2>Follow Us</h2>
                <div>
                    <a href="https://www.facebook.com/login/" target="_blank">

                <i className="fa-brands fa-2x me-2 fa-facebook" ></i>
                    </a>
                    <a href="https://in.pinterest.com/" target="_blank">

                <i className="fa-brands fa-2x me-2 fa-pinterest" ></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">

                <i className="fa-brands fa-2x me-2 fa-instagram" ></i>
                    </a>
                    <a href="https://twitter.com/i/flow/login" target="_blank">

                <i className="fa-brands fa-2x me-2 fa-twitter" ></i>
                    </a>

               
                </div>
            </div>
            <div className="col-md-4">
                <img className="payment mx-auto  " src={Pay} alt="" />
            </div>
           <div className="copyright py-3">
            <div className="container">
            <div className="row">
                <div className="col-md-6 text-md-start">
                    <small>
                        &copy; 2022-2023 CARDEALS. All RIGHT RECEIVED
                    </small>
                </div>
                <div className="col-md-6 text-md-end">
                    <small>USER LICENCE AGREEMENT | PRIVACY POLICY | TERMS & CONDITIONS</small>
                </div>
            </div>
            </div>
           </div> 
         </div>

      </footer>
    </>
  )
}

export default Footer1
