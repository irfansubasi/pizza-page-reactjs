import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    src: `../../assets/icons/1.svg`,
    alt: 'kore',
    text: 'YENİ! Kore',
  },
  {
    id: 2,
    src: '../../assets/icons/2.svg',
    alt: 'pizza',
    text: 'Pizza',
  },
  {
    id: 3,
    src: '../../assets/icons/3.svg',
    alt: 'burger',
    text: 'Burger',
  },
  {
    id: 4,
    src: '../../assets/icons/4.svg',
    alt: 'kızartma',
    text: 'Kızartmalar',
  },
  {
    id: 5,
    src: '../../assets/icons/5.svg',
    alt: 'fastfood',
    text: 'Fast Food',
  },
  {
    id: 6,
    src: '../../assets/icons/6.svg',
    alt: 'içecek',
    text: 'Gazlı İçecek',
  },
];

export default function Navbar({ bgcolor }) {
  return (
    <nav className={`${bgcolor || 'bg-whiteC'} py-4`}>
      <div className="container mx-auto px-11 min-[1024px]:px-11 xl:px-48 flex flex-wrap justify-between">
        {items.map((item, index) => (
          <Link
            to="/order"
            id={item.id}
            key={index}
            className="flex items-center font-barlow justify-center gap-2 text-greyDarkC font-medium px-4 py-2 rounded-full hover:bg-greyDarkC hover:text-whiteC transition w-1/2 lg:w-auto"
          >
            <img src={item.src} alt={item.alt} className="w-10" />
            <span className="w-2/4">{item.text}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
