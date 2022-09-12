import React from 'react';
import SocialIcon from '../SocialIcon';

const Footer = () => {
  return (
    <footer className="footer bg-dark py-2">
      <div className="thank-you">
        <h1>Vielen Dank für den Besuch! </h1>
        <p>&#x1F600;</p>
      </div>
      <div className="container grid grid-2">
        <div className="copyright">
          <h2>Lole's</h2>
          <div className="radnovrijeme">
            <h4> ÖFFNUNGSZEITEN:</h4>
            <p>Montag - Sonntag</p>
            <p> 10:00 bis 20:00 Uhr</p>
            <p>Feiertag geschlossen</p>
            <p className="warmeKuche">durchgehend warme Küche</p>
          </div>
          <div className="social">
            <p>please LIKE us on</p>
            <ul className="social-grid flex">
              <li>
                <SocialIcon
                  path="https://www.facebook.com/"
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
          <p>Copyright &copy; 2022</p>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="748"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Westbahnstra%C3%9Fe%20108,%204300%20St.%20Valentin&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="frame-map"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
