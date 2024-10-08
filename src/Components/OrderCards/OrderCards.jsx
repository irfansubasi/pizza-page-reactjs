import OrderCard from './OrderCard/OrderCard';
import './OrderCards.css';

export default function OrderCards() {
  return (
    <section className="card-section">
      <div className="container">
        <div className="cards">
          <OrderCard
            title={
              <>
                Özel
                <br />
                Lezzetus
              </>
            }
            className="card-1"
            headingLevel="h1"
            subtitle="Position: Absolute Acı Burger"
          />
          <div className="mini-cards">
            <OrderCard
              title="Hackathlon Burger Menü"
              className="card-2"
              headingLevel="h3"
            />
            <OrderCard
              title={
                <>
                  <span className="card-3-span">Çoooook</span> hızlı npm gibi
                  kurye
                </>
              }
              className="card-3"
              headingLevel="h3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
