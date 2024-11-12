import OrderCard from './OrderCard/OrderCard';

export default function OrderCards() {
  return (
    <section className="card-section my-12">
      <div className="container mx-auto px-11 lg:px-48">
        <div className="cards flex flex-wrap flex-col lg:flex-row items-stretch justify-center gap-2">
          <OrderCard
            title={
              <>
                Özel
                <br />
                Lezzetus
              </>
            }
            className="bg-[url('../../assets/images/cta/kart-1.png')] bg-cover bg-center bg-no-repeat text-whiteC"
            headingLevel="h1"
            subtitle="Position: Absolute Acı Burger"
          />
          <div className="flex-1 flex flex-col gap-2">
            <OrderCard
              title="Hackathlon Burger Menü"
              className="bg-[url('../../assets/images/cta/kart-2.png')] bg-cover bg-center bg-no-repeat text-whiteC"
              headingLevel="h3"
            />
            <OrderCard
              title={
                <>
                  <span className="text-redC">Çoooook</span> hızlı npm gibi
                  kurye
                </>
              }
              className="bg-[url('../../assets/images/cta/kart-3.png')] bg-cover bg-center bg-no-repeat text-greyDarkC"
              headingLevel="h3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
