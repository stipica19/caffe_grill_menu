import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import Intro from './Intro';
import { HomeData } from '../../data/data';
import 'swiper/css';
import 'swiper/css/effect-fade';
import SocialIcon from '../SocialIcon';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

SwiperCore.use([Autoplay, EffectFade]);
const IntroContainer = () => {
  const swiperOption = {
    loop: true,
    speed: 650,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeParents: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="section slider-section" id="menu_home">
      <div className="overlay"></div>
      <Swiper
        effect="fade"
        className="slider-active"
        fadeEffect={'fade'}
        {...swiperOption}
      >
        {HomeData[0].slider &&
          HomeData[0].slider.map((single, key) => {
            return (
              <SwiperSlide key={key}>
                <Intro key={key} data={single} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="icon-info stats">
        <div className="container">
          <h1
            className="stats-heading text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Lole's
          </h1>
          <h3
            className="stats-heading text-center my-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            QUALITÄT & GESCHMACK
          </h3>
          <div
            className="grid grid-3 text-center my-1 "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div>
              <PhoneCallbackOutlinedIcon
                className="faa-ring animated  "
                style={{ fontSize: '64px' }}
              />
              <h3>Call us</h3>
              <p className="text-secondary">+43 667642485</p>
            </div>
            <div>
              <LocationOnOutlinedIcon
                className="location-animate"
                style={{ fontSize: '64px' }}
              />
              <h3>Location</h3>
              <p className="text-secondary">
                Westbahnstr. 108, A-4300 St. Valentin
              </p>
            </div>
            <div>
              <EmailOutlinedIcon
                className="email"
                style={{ fontSize: '64px' }}
              />
              <h3>E-mail</h3>
              <p className="text-secondary">office@loles.at</p>
            </div>
          </div>
        </div>
      </div>
      <ul className="social">
        <li>
          <SocialIcon
            path="https://www.facebook.com"
            icon="facebook"
          />
        </li>

        <li>
          <SocialIcon
            path="https://www.instagram.com/"
            icon="instagram"
          />
        </li>
      </ul>
    </div>
  );
};

export default IntroContainer;
