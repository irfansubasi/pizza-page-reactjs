import logo from '../../../Assets/Iteration-1-assets/logo.svg';
import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 50%;
`;

const Main = styled.main`
  position: relative;
  background-color: var(--red-color);
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 5rem;
  color: var(--white-color);
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function SuccessPage() {
  return (
    <>
      <Main>
        <Content className="container">
          <Image src={logo} alt="" />
          <Paragraph>
            TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
          </Paragraph>
        </Content>
      </Main>
    </>
  );
}
