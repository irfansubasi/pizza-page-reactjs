import Footer from '../../Components/Footer/Footer';
import MainHeader from '../../Components/MainHeader/MainHeader';
import MenuSection from '../../Components/MenuSection/MenuSection';
import Navbar from '../../Components/Navbar/Navbar';
import OrderCards from '../../Components/OrderCards/OrderCards';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <main>
        <Navbar />
        <OrderCards />
        <MenuSection />
        <Footer />
      </main>
    </>
  );
}
