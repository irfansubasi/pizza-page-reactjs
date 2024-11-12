export default function Footer() {
  return (
    <footer className="bg-greyDarkC text-whiteC font-barlow">
      <div className="container mx-auto px-11 lg:px-48">
        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-20 py-16">
          <div className="flex-1 flex flex-col gap-8">
            <img
              src="../../assets/images/footer/logo-footer.svg"
              alt="footer-logo"
              className="w-40"
            />
            <div className="flex items-center gap-2">
              <img
                src="../../assets/images/footer/icons/icon-1.png"
                alt="address"
                className="w-6"
              />
              <p>
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="../../assets/images/footer/icons/icon-2.png"
                alt="email"
                className="w-6"
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="../../assets/images/footer/icons/icon-3.png"
                alt="phone"
                className="w-6"
              />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-medium mb-4 text-xl">Hot Menu</h3>
            <a href="#">Terminal Pizza</a>
            <a href="#">5 Kişilik Hackathlon Pizza</a>
            <a href="#">useEffect Tavuklu Pizza</a>
            <a href="#">Beyaz Console Frosty</a>
            <a href="#">Testler Geçti Mutlu Burger</a>
            <a href="#">Position Absolute Acı Burger</a>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-medium mb-4 text-xl">Instagram</h3>
            <div className="flex flex-wrap flex-col gap-4">
              <div className="w-full flex gap-3">
                <img
                  src="../../assets/images/footer/li-0.png"
                  className="w-full"
                />
                <img
                  src="../../assets/images/footer/li-1.png"
                  className="w-full"
                />
                <img
                  src="../../assets/images/footer/li-2.png"
                  className="w-full"
                />
              </div>
              <div className="w-full flex gap-3">
                <img
                  src="../../assets/images/footer/li-3.png"
                  className="w-full"
                />
                <img
                  src="../../assets/images/footer/li-4.png"
                  className="w-full"
                />
                <img
                  src="../../assets/images/footer/li-5.png"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-grey-lightC py-8 text-xs">
        <div className="container mx-auto px-11 lg:px-48 flex justify-between items-center">
          <p>© 2023 Teknolojik Yemekler.</p>
          <div className="flex gap-4">
            <a href="/" className="w-5">
              <img src="../../assets/images/footer/icons/facebook.svg" />
            </a>
            <a href="/" className="w-5">
              <img src="../../assets/images/footer/icons/instagram.svg" />
            </a>
            <a href="/" className="w-5">
              <img src="../../assets/images/footer/icons/x-twitter.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
