import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import MenuCard from './MenuCard/MenuCard';
import { foodPrices } from '../../data/priceData';

const MenuSectionStyled = styled.section`
  margin-bottom: 3rem;
`;

const MenuHeadings = styled.div`
  text-align: center;
`;

const ItalicHeading = styled.p`
  color: var(--red-color);
  font-family: 'Satisfy', serif;
  font-size: 2rem;
`;

const MainMenuHeading = styled.p`
  font-family: 'Barlow', system-ui;
  font-weight: 600;
  font-size: 2.2rem;
  color: var(--grey-dark-color);
`;

const MenuCards = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-family: 'Barlow', system-ui;
  font-weight: 600;
  color: var(--grey-dark-color);
`;

const items = [
  {
    id: 'terminal',
    src: '../../../Assets/Iteration-2-aseets/pictures/food-1.png',
    title: 'Terminal Pizza',
    score: '4.9',
    review: '(200)',
    price:
      foodPrices.find((price) => price.name === 'Terminal Pizza')?.value || 0,
  },
  {
    id: 'absolute',
    src: '../../../Assets/Iteration-2-aseets/pictures/food-2.png',
    title: 'Position Absolute Acı Pizza',
    score: '4.2',
    review: '(186)',
    price:
      foodPrices.find((price) => price.name === 'Position Absolute Acı Pizza')
        ?.value || 0,
  },
  {
    id: 'burger',
    src: '../../../Assets/Iteration-2-aseets/pictures/food-3.png',
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
    <MenuSectionStyled>
      <div className="container">
        <MenuHeadings>
          <ItalicHeading>en çok paketlenen menüler</ItalicHeading>
          <MainMenuHeading>Acıktıran Kodlara Doyuran Lezzetler</MainMenuHeading>
        </MenuHeadings>
        <Navbar bgcolor={'var(--beige-color)'} />
        <MenuCards>
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
        </MenuCards>
      </div>
    </MenuSectionStyled>
  );
}
