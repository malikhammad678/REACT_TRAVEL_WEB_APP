import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <section className="hero_about">
        <h1>About Us</h1>
      </section>

      <section className="history">
         <div className="history_details">
          <h2>Our History</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam doloribus mollitia vel et, similique suscipit iusto quo, cum accusantium, ad vitae nihil dignissimos minus quos totam error corrupti? Esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, esse ratione? Quasi eos est assumenda quod hic ut atque id velit sequi? Repellendus itaque earum deserunt fuga delectus ab minima. </p>
         </div>
         <div className="image">
          <img src="https://images.unsplash.com/photo-1575278221958-e8d28a4f0968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVzdCUyMG5hdHVyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
         </div>
      </section>
      <section className="history">
      <div className="image">
          <img src="https://images.unsplash.com/photo-1516918656725-e9b3ae9ee7a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVzdCUyMG5hdHVyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
         </div>
         <div className="history_details">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam doloribus mollitia vel et, similique suscipit iusto quo, cum accusantium, ad vitae nihil dignissimos minus quos totam error corrupti? Esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, esse ratione? Quasi eos est assumenda quod hic ut atque id velit sequi? Repellendus itaque earum deserunt fuga delectus ab minima. </p>
         </div>
         
      </section>
      <section className="history">
         <div className="history_details">
          <h2>Our Vision</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam doloribus mollitia vel et, similique suscipit iusto quo, cum accusantium, ad vitae nihil dignissimos minus quos totam error corrupti? Esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, esse ratione? Quasi eos est assumenda quod hic ut atque id velit sequi? Repellendus itaque earum deserunt fuga delectus ab minima. </p>
         </div>
         <div className="image">
          <img src="https://images.unsplash.com/photo-1679541706119-d1a950eb6934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlc3QlMjBuYXR1cmUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
         </div>
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

export default About
