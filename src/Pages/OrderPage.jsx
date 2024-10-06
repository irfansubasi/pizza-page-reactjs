import MiniHeader from '../Components/MiniHeader/MiniHeader';
import OrderForm from '../Components/OrderForm/OrderForm';
import { foodPrices } from '../data/priceData';
import './OrderPage.css';

export default function OrderPage() {
  return (
    <>
      <MiniHeader />
      <main>
        <section className="details-section">
          <div class="details-content formpage-container">
            <h3>Position Absolute Acı Pizza</h3>
            <div class="stats">
              <p class="price">{foodPrices.AbsolutePizza}₺</p>
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
