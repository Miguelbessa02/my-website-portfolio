import styled from 'styled-components';

// Styled Components
const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #cccccc;
  margin-top: 10px;
`;

function Home() {
  return (
    <HomeContainer>
      <Heading>Hi, I'm Miguel Ferreira</Heading>
      <SubHeading>Full-Stack Developer & Tech Enthusiast from Portugal</SubHeading>
    </HomeContainer>
  );
}

export default Home;
  