import styled from 'styled-components';
import profileImage from '../assets/profile.jpg';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #1a1a1a;
  color: white;
  text-align: left;
  gap: 20px; /* Reduz o espaço entre texto e imagem */
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #cccccc;
`;

const LanguageContainer = styled.div`
  margin-top: 20px;
`;

const Language = styled.span`
  font-weight: bold;
  margin-right: 15px;
`;

const ProfileImage = styled.img`
  border-radius: 10px;
  width: 100%;
  max-width: 250px;
`;

function AboutMe() {
  return (
    <AboutContainer>
      <TextContainer>
        <Heading>About Me</Heading>
        <Description>
          I'm Miguel Ferreira, a web developer from Portugal with a degree in Computer Engineering. I’m passionate about creating meaningful web experiences and love exploring new technologies to inspire others.
        </Description>
        <LanguageContainer>
          <Language>Portuguese: Native</Language>
          <Language>English: B2</Language>
          <Language>Spanish: B1</Language>
        </LanguageContainer>
      </TextContainer>
      <ProfileImage src={profileImage} alt="Miguel Ferreira" />
    </AboutContainer>
  );
}

export default AboutMe;
