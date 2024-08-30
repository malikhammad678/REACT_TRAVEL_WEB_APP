import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <>
      <section className="signUp_hero">
        <h1>Sign Up</h1>
      </section>
      <section className="signup">
        <form action="#">
         <input type="text" placeholder='First name' required/>
         <input type="text" placeholder='Last name' required/>
         <input type="email" placeholder='Email' required/>
         <input type="password" placeholder='Password' required/>
         <button className='btn'>Sign Up</button>
        </form>
        <img className='img' src="https://images.unsplash.com/photo-1706755347832-0a8c8caa7647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpZ251cCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
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

export default Signup
