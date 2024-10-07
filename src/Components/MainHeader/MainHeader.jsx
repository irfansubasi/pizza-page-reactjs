import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '/Assets/Iteration-1-assets/logo.svg';

const HeaderSection = styled.header`
  background: url(/Assets/Iteration-1-assets/home-banner.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  max-width: 550px;
  gap: 3.5rem;
`;

const HeaderLogo = styled.img`
  width: 20rem;
  height: auto;
`;

const HeaderHeadings = styled.div`
  text-align: center;
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
`;

const StyledLink = styled(Link)`
  background-color: var(--yellow-color);
  color: var(--grey-dark-color);
  font-weight: 600;

  /*to crush bootstrap rules*/
  &:hover {
    background-color: var(--yellow-color);
    color: var(--grey-dark-color);
    font-weight: 600;
  }
`;

export default function MainHeader() {
  return (
    <HeaderSection>
      <HeaderContent>
        <HeaderLogo src={Logo} />
        <HeaderHeadings>
          <ItalicHeading>fırsatı kaçırma</ItalicHeading>
          <MainHeading>kod acıktırır pizza, doyurur</MainHeading>
        </HeaderHeadings>
        <StyledLink className="btn header-btn" to="/order">
          ACIKTIM
        </StyledLink>
      </HeaderContent>
    </HeaderSection>
  );
}
