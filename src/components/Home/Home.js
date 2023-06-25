import React from 'react';
import Contact from './Contact';
import Gallery from './Gallery';
import About from './About';
import '../../style/home.css';

const Home = () => {
  return (
    <>
      <section className="home pb-5" style={{ backgroundColor: "#06cba8" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mt-5 py-3">
              <h1 className="text-danger ms-5 fw-bold">Discover the <span className="text-dark">Best Products</span></h1>
              <br />
              <p className="text-light ms-5 fs-5 fst-italic">Looking to buy or sell products? Join us now.</p>
              <br />
              <a href="/" className="btn btn-danger ms-5 fw-bold fs-5">Shop Now</a>
            </div>
            <div className="col-md-5 text-center">
              <img src="https://cache.quantocustaviajar.com/blog/wp-content/uploads/2017/11/compras-online.gif" alt="" style={{ width: '40rem', height: '25rem' }} className="py-2 img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid rgbs shadow-lg p-3 pt-5 mb-5 bg-orange rounded" style={{ color: 'white', backgroundColor: 'purple' }}>
  <div className="row">
    <div className="col-md-6">
      <p className="fs-5">Need Help?</p>
      <h1>Talk to Us Directly to Clear Your Confusion.</h1>
      <p className="fs-5">We Are Here to Assist You.</p>
    </div>
    <div className="col-md-6 mt-5 py-5 text-center">
      <a href="#contact-form" className="btn btn-warning ms-2 fw-bold fs-5" type="submit">Contact Now</a>
    </div>
  </div>
</div>


      <div className="container-fluid shadow-lg mb-5 rounded bg-white py-3">
  <div className="row py-2">
    <div className="col-md-6">
      <h1 className="text-center text-lightgreen">Want to Become a Seller?</h1>
      <h2 className="fst-italic py-2 text-lightgreen">Join Us and Start Selling Your Products.</h2>
      <p className="fs-4 text-lightgreen">Enroll Now and Sell Your Products on Our Platform Without Any Extra Cost or Commission.</p>
      <a href="/" className="btn btn-warning ms-2 fw-bold fs-5 text-white" type="submit">Enroll Now</a>
    </div>
    <div className="col-md-6">
      <img src="https://th.bing.com/th/id/R.816517f6826b469618d49bb809dcd877?rik=yKshCyZfJ9wrNg&pid=ImgRaw&r=0" style={{ width: '100%', height: '25rem' }} alt="" className="img-fluid" />
    </div>
  </div>
</div>


      <About />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
