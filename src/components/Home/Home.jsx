import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className="hero_home">
        <h1>Your Journey Your Story!</h1>
        <p>Choose your favourite destination.</p>
        <Link to='/services'>Travel plan</Link>
      </div>
      <div className="popular_destination">
        <h1 className='heading'>Popular Destinations</h1>
        <p className='sub_heading'>Tour gives you the opportunity to see a lot, within a time frame!</p>
        <div className="flex_container">
          <div className="left_container">
           <h2>Tal Volcano, Batanges</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aspernatur dicta nulla blanditiis, asperiores, aliquid at, fuga commodi recusandae praesentium cupiditate accusantium? Deserunt laboriosam qui accusantium, nesciunt alias quos aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus dolorum error repudiandae similique, molestias illo voluptatibus tempora est ab quos fugiat labore libero aperiam voluptatum commodi facere, alias praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque et ullam nam, aliquid, consequatur eligendi aperiam modi impedit maxime laboriosam laudantium voluptates necessitatibus dicta veritatis fugit explicabo vel! Quasi?</p>
          </div>
          <div className="right_container">
               <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" alt="" />
               <img className='absolute' src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww" alt="" />
          </div>
        </div>
      </div>
      <div className="recent_dest">
      <h1 className='heading'>Recent Trips</h1>
      <p className='sub_heading'>You can explore unique destinations using Google maps</p>
      <div className="dest_container">
        <div className="box">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fHww" alt="" />
          <div className="content">
            <h3>Trip to France</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eius voluptatibus aliquid, nulla ducimus earum iure quis debitis esse harum?</p>
            <Link className='btn' to="/services">Explore more</Link>
          </div>
        </div>
        <div className="box">
          <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VVNhfGVufDB8fDB8fHww" alt="" />
          <div className="content">
            <h3>Trip to USA</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eius voluptatibus aliquid, nulla ducimus earum iure quis debitis esse harum?</p>
            <Link className='btn' to="/services">Explore more</Link>
          </div>
        </div>
        <div className="box">
          <img src="https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0aGVybGFuZHN8ZW58MHx8MHx8fDA%3D" alt="" />
          <div className="content">
            <h3>Trip to Natherlands</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eius voluptatibus aliquid, nulla ducimus earum iure quis debitis esse harum?</p>
            <Link className='btn' to="/services">Explore more</Link>
          </div>
        </div>
      </div>
      </div>
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

export default Home
