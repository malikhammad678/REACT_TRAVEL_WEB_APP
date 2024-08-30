import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
     <section className="contact_hero">
      <h1>Contact Us</h1>
      </section> 

      <section className="contact">
        <h1>Send us a Message!</h1>
        {/* 964e6c66-e56b-4291-9903-75972eb5773a */}
        <form action="https://api.web3forms.com/submit" method="POST" className='form'>
        <input type="hidden" name="access_key" value="964e6c66-e56b-4291-9903-75972eb5773a"/>
          <input type="text" placeholder='Name' name='Name' required/>
          <input type="email" placeholder='Email' name='Email' required/>
          <input type="text" placeholder='Subject' name='Subject' required/>
          <textarea name="message" id="" placeholder='Message'></textarea>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </section>
      <div className="footer">
        <div className="top_footer">
          <div className='logo'>
          <h1>Travel.</h1>
          <p>Choose your destination</p>
          </div>
          <div className="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="fot_container">
            <div className="box">
              <h3>Project</h3>
              <span>Changeleg</span>
              <span>Version</span>
              <span>Status</span>
              <span>Lisence</span>
            </div>
            <div className="box">
              <h3>Community</h3>
              <span>Github</span>
              <span>Twitter</span>
              <span>Facebook</span>
              <span>Instragram</span>
            </div>
            <div className="box">
              <h3>Help</h3>
              <span>Troubleshooting</span>
              <span>Contact us</span>
              <span>Help</span>
              <span>Terms & conditions</span>
            </div>
            <div className="box">
              <h3>Others</h3>
              <span>Privacy & Policy</span>
              <span>About us</span>
              <span>Address</span>
              <span>Contact us</span>
            </div>
          </div>
        </div>
        <p className='copy'>Copyright @ 2024 - All right reserved</p>
      </div>
    </>
  )
}

export default Contact
