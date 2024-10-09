import styled from 'styled-components';
import './Footer.css';

const StyledFooter = styled.footer`
  background: #1a1a1a;
  color: var(--white-color);
  font-family: 'Barlow', system-ui;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-content">
          <div className="footer-item contact">
            <img
              src="Assets/Iteration-2-aseets/footer/logo-footer.svg"
              alt="footer-logo"
            />
            <div className="contact-item address">
              <img
                src="Assets/Iteration-2-aseets/footer/icons/icon-1.png"
                alt="address"
              />
              <p>
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </p>
            </div>
            <div className="contact-item email">
              <img
                src="Assets/Iteration-2-aseets/footer/icons/icon-2.png"
                alt="address"
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="contact-item tel">
              <img
                src="Assets/Iteration-2-aseets/footer/icons/icon-3.png"
                alt="address"
              />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
          <div className="footer-item hot-menu">
            <h3>Hot Menu</h3>
            <a>Terminal Pizza</a>
            <a>5 Kişilik Hackathlon Pizza</a>
            <a>useEffect Tavuklu Pizza</a>
            <a>Beyaz Console Frosty</a>
            <a>Testler Geçti Mutlu Burger</a>
            <a>Position Absolute Acı Burger</a>
          </div>
          <div className="footer-item instagram-gallery">
            <h3>Instagram</h3>
            <div className="gallery">
              <img src="Assets/Iteration-2-aseets/footer/insta/li-0.png" />
              <img src="Assets/Iteration-2-aseets/footer/insta/li-1.png" />
              <img src="Assets/Iteration-2-aseets/footer/insta/li-2.png" />
              <img src="Assets/Iteration-2-aseets/footer/insta/li-3.png" />
              <img src="Assets/Iteration-2-aseets/footer/insta/li-4.png" />
              <img src="Assets/Iteration-2-aseets/footer/insta/li-5.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container copyright-content">
          <p>© 2023 Teknolojik Yemekler.</p>
          <div className="socials">
            <a href="/">
              <img src="Assets/Iteration-2-aseets/footer/icons/facebook.svg" />
            </a>
            <a href="/">
              <img src="Assets/Iteration-2-aseets/footer/icons/instagram.svg" />
            </a>
            <a href="/">
              <img src="Assets/Iteration-2-aseets/footer/icons/x-twitter.svg" />
            </a>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
