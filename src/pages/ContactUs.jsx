import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const ContactUs = () => {
  return (
    <div className='contact-us-page'>
      <div className="contact-form">
        <h3 className='heading'>CONTACT US</h3>
        <form>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea rows={5} cols={23} type="text" placeholder='Message'/>
            <button className='btn'>Submit!</button>
        </form>
        </div>
        <div className="social-info">
            <h3 className='heading'>Social Links</h3>
            <div className="link">        
                <BsLinkedin color='blue' size={"2em"}/>
                <a href="@">LinkedIn</a>
            </div>    
            <div className="link">        
                <BsTwitter color='blue' size={"2em"}/>
                <a href="@">Twitter</a>
            </div>    
            
            <div className="link">        
                <BsInstagram color='red' size={"2em"}/>
                <a href="@">Instagram</a>
            </div>    
            
            <div className="link">        
                <BsGithub size={"2em"}/>
                <a href="@">Github</a>
            </div>    
            <div className="link">        
                <BsFacebook color='blue' size={"2em"}/>
                <a href="@">Facebook</a>
            </div>    
        
        </div>
        <div className="information">
            <h3 className='heading'>Contact information</h3>
            <p>Phone: 333-231-322-112</p>
            <p> Email: Notes.se@yahoo.com</p>
            <h3 className='heading'>Visit Us</h3>
            <p>E-notes</p>
            <p>Near Sukkur IBA University</p>
            <p>Sukkur, Sindh, 090212</p>
            <p>Pakistan</p>
            <h3 className='heading'>Hours of Operations</h3>
            <p>Monday-Friday: 9:00 AM - 5:00 PM (Local Time)</p>
            <p>  Saturday: 10:00 AM - 2:00 PM (Local Time) </p>
            <p>Sunday: Closed</p>
        </div>  
    </div>
  )
}

export default ContactUs;
