import { Link } from 'react-scroll';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 40px;
  background-color: #f6f6f6;
  color: #333;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 1;
  max-width: 200px;
  margin: 10px;
`;

const Title = styled.h3`
  font-size: 1rem;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    color: #0077b6;
  }
`;

const FooterLinkSocials = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  margin: 5px 0;

  &:hover {
    color: #0077b6;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Section>
        <Title>NAVIGATION</Title>
        <FooterLink to="about" smooth={true} duration={500}>About</FooterLink>
        <FooterLink to="projects" smooth={true} duration={500}>Portfolio</FooterLink>
        <FooterLink to="contact" smooth={true} duration={500}>Contact</FooterLink>
      </Section>
      
      <Section>
        <Title>SOCIALS</Title>
        <FooterLinkSocials href="https://linkedin.com/in/miguel-ferreira-86a427264" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLinkSocials>
        <FooterLinkSocials href="https://github.com/Miguelbessa02" target="_blank" rel="noopener noreferrer">GitHub</FooterLinkSocials>
        <FooterLinkSocials href="https://www.instagram.com/miguelbessa02/">Instagram</FooterLinkSocials>
        <FooterLinkSocials href="https://x.com/Miguelferreia_">Twitter</FooterLinkSocials>
      </Section>
      
      <Section>
        <Title>CONTACT ME</Title>
        <FooterLink href="mailto:youremail@example.com">youremail@example.com</FooterLink>
      </Section>

      <Section>
        <Title>GALLERY</Title>
        {/* Aqui podes adicionar imagens ou links de projetos recentes */}
      </Section>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>© 2024 MIGUEL FERREIRA</div>
    </FooterContainer>
  );
}

export default Footer;
