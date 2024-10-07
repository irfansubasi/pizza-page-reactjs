import { Link } from 'react-router-dom';

export default function MiniHeader() {
  return (
    <header className="header-section">
      <div className="header-content formpage-container">
        <img src="/Assets/Iteration-1-assets/logo.svg" alt="logo" />
        <nav>
          <Link to="/">Anasayfa</Link>
          <span> - </span>
          <Link to="/order">Sipariş Oluştur</Link>
        </nav>
      </div>
    </header>
  );
}
