import styled from 'styled-components';

const Card = styled.div`
  flex: 1;
  background: var(--white-color);
  padding: 1.5rem;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin: 1rem 0;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Reviews = styled.div`
  color: var(--grey-light-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export default function MenuCard(props) {
  const { id, src, title, score, review, price } = props;
  return (
    <Card id={id}>
      <Img src={src} alt={id} />
      <div>
        <Title>{title}</Title>
        <Stats>
          <Reviews>
            <p>{score}</p>
            <p>{review}</p>
          </Reviews>
          <Price>{price}₺</Price>
        </Stats>
      </div>
    </Card>
  );
}
