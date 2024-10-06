import './MainHeader.css';

export default function MainHeader() {
  return (
    <header className="header-section">
      <div className="header-content">
        <img src="/Assets/Iteration-1-assets/logo.svg" alt="logo" />
        <div className="header-headings">
          <p className="italic-heading">fırsatı kaçırma</p>
          <p className="main-heading">kod acıktırır pizza, doyurur</p>
        </div>
        <a className="btn header-btn" href="/">
          ACIKTIM
        </a>
      </div>
    </header>
  );
}
