import styled from 'styled-components';
import Footer from '../../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';

const Image = styled.img``;

const Main = styled.main`
  background-color: var(--red-color);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const ItalicHeading = styled.p`
  font-family: 'Satisfy', system-ui;
  color: var(--yellow-color);
  font-size: 2rem;
`;

const MainHeading = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 4.7rem;
  line-height: 1;
  color: var(--white-color);
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--white-color);
  margin: 2rem 0;
`;

const Headings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white-color);
  font-family: 'Barlow', 'sans-serif';
  font-weight: 600;
  gap: 30px;
`;

const Choosen = styled.div`
  width: 70%;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  gap: 15px;
`;

const ParaghSpan = styled.span`
  font-weight: 700;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--white-color);
  border-radius: 10px;
  width: 100%;
  padding: 2rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.header`
  background-color: var(--red-color);
  padding: 3rem;
  text-align: center;
`;

export default function SuccessPage() {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <>
      <Header>
        <Image src={logo} alt="" />
      </Header>
      <Main>
        <Content className="container">
          <Headings>
            <ItalicHeading>lezzetin yolda</ItalicHeading>
            <MainHeading>SİPARİŞ ALINDI</MainHeading>
            <Divider />
          </Headings>
          <Results>
            <h2 style={{ fontWeight: '600' }}>{formData.food}</h2>
            <Choosen>
              <p>
                Boyut: <ParaghSpan>{formData.size}</ParaghSpan>
              </p>
              <p>
                Hamur: <ParaghSpan>{formData.dough}</ParaghSpan>
              </p>
              <p>
                Ek Malzemeler:{' '}
                <ParaghSpan>
                  {formData.extras.map((item) => `${item}, `)}
                </ParaghSpan>
              </p>
            </Choosen>
            <Prices>
              <h3>Sipariş Toplamı</h3>
              <PriceRow>
                <p>Seçimler</p>
                <p>{formData.extrasPrice}₺</p>
              </PriceRow>
              <PriceRow>
                <p>Toplam</p>
                <p>{formData.price}₺</p>
              </PriceRow>
            </Prices>
          </Results>
        </Content>
      </Main>
      <Footer />
    </>
  );
}
