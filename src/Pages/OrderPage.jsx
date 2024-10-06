import OrderForm from '../Components/OrderForm/OrderForm';
import './OrderPage.css';

export default function OrderPage() {
  return (
    <>
      <header className="header-section">
        <div className="header-content formpage-container">
          <img src="/Assets/Iteration-1-assets/logo.svg" alt="logo" />
          <nav>
            <a href="#">Anasayfa</a>
            <span> - </span>
            <a href="#">Sipariş Oluştur</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="details-section">
          <div class="details-content formpage-container">
            <h3>Position Absolute Acı Pizza</h3>
            <div class="stats">
              <p class="price">60₺</p>
              <div class="reviews">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p className="explanation">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </section>
        <OrderForm />
      </main>
    </>
  );
}
