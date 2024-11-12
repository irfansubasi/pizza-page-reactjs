import Navbar from '../Navbar/Navbar';
import MenuCard from './MenuCard/MenuCard';
import { foodPrices } from '../../data/priceData';

const items = [
  {
    id: 'terminal',
    src: '../../assets/images/food-1.png',
    title: 'Terminal Pizza',
    score: '4.9',
    review: '(200)',
    price:
      foodPrices.find((price) => price.name === 'Terminal Pizza')?.value || 0,
  },
  {
    id: 'absolute',
    src: '../../assets/images/food-2.png',
    title: 'Position Absolute Acı Pizza',
    score: '4.2',
    review: '(186)',
    price:
      foodPrices.find((price) => price.name === 'Position Absolute Acı Pizza')
        ?.value || 0,
  },
  {
    id: 'burger',
    src: '../../assets/images/food-3.png',
    title: 'UseEffect Tavuklu Burger',
    score: '5.0',
    review: '(250)',
    price:
      foodPrices.find((price) => price.name === 'UseEffect Tavuklu Burger')
        ?.value || 0,
  },
];

export default function MenuSection() {
  return (
    <section className="mb-12">
      <div className="container mx-auto">
        <div className="text-center px-11 lg:px-48">
          <p className="text-redC font-satisfy text-2xl">
            en çok paketlenen menüler
          </p>
          <p className="font-barlow font-semibold text-4xl text-greyDarkC">
            Acıktıran Kodlara Doyuran Lezzetler
          </p>
        </div>
        <Navbar bgcolor={'bg-beigeC'} />
        <div className="mt-8 flex justify-center flex-col lg:flex-row flex-wrap gap-x-10 gap-y-6 font-barlow font-semibold text-greyDarkC px-11 lg:px-48">
          {items &&
            items.map((item, index) => (
              <MenuCard
                key={index}
                id={item.id}
                src={item.src}
                title={item.title}
                score={item.score}
                review={item.review}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
