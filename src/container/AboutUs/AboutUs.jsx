import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';


const AboutUs = () => (

  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    {/* <div className="app__aboutus-overlay flex__center">

      <img src={images.G} alt="g letter" />

    </div> */}


    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={ images.spoon } alt="about_spoon" className="spoon__images"/>
        <p className="p__opensans">Warunk Upnormal adalah gerai makanan dan minuman yang eksis sejak tahun 2014. Brand makanan dan minuman ini di lahirkan oleh PT. Citarasa Prima Berjaya (CRP). Sejak berdirinya sampai saat ini sudah terdapat 120 outlet yang tersebar di 17 Provinsi dan 41 kabupaten atau kota di seluruh provinsi.</p>
        <button type="button" className="custom__button">Lebih banyak</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={ images.spoon } alt="about_spoon" className="spoon__images"/>
        <p className="p__opensans">Warunk Upnormal adalah gerai makanan dan minuman yang eksis sejak tahun 2014. Brand makanan dan minuman ini di lahirkan oleh PT. Citarasa Prima Berjaya (CRP). Sejak berdirinya sampai saat ini sudah terdapat 120 outlet yang tersebar di 17 Provinsi dan 41 kabupaten atau kota di seluruh provinsi.</p>
        <button type="button" className="custom__button">Lebih banyak</button>
      </div>

    </div>
  </div>

);

export default AboutUs;
