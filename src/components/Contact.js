import styled from 'styled-components';

const ContactContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 150px;
  background-color: #1a1a1a;
  color: white;
`;

const TextWrapper = styled.div`
  flex: 1;
  max-width: 400px;
`;

const FormWrapper = styled.div`
  flex: 1;
  max-width: 450px; /* Limita a largura do formulário */
  background-color: #f0f0f0;
  padding: 35px;
  padding-right: 50px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-top: 15px;
  font-weight: bold;
`;

const RequiredText = styled.span`
  font-weight: normal;
  font-size: 0.85rem;
  color: #666; /* Cor mais clara */
  margin-left: 5px; /* Espaçamento entre o título e o "(obrigatório)" */
`;

const InputRow = styled.div`
  display: flex;
  gap: 50px;
`;

const Input = styled.input`
  width: 100%; /* Garante que o input ocupe toda a largura do FormWrapper */
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: #e74c3c;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: not-allowed;
  margin-top: 20px; /* Aumenta o espaço acima do botão */
  align-self: flex-start; /* Alinha o botão à esquerda */
  width: auto;
`;


function Contact() {
  return (
    <ContactContainer>
      <TextWrapper>
        <Title>Let's Inspire the World Together</Title>
        <p>Aproveita a consulta e orçamento gratuitos! Deixa uma mensagem para discutir o projeto que tens em mente.</p>
      </TextWrapper>
      <FormWrapper>
        <InputRow>
          <div>
            <Label htmlFor="name">Name<RequiredText>(mandatory)</RequiredText></Label>
            <Input type="text" id="name" placeholder="Your name" />
          </div>
          <div>
            <Label htmlFor="surname">Surname<RequiredText>(mandatory)</RequiredText></Label>
            <Input type="text" id="surname" placeholder="Your surname" />
          </div>
        </InputRow>
        <Label htmlFor="email">Email<RequiredText>(mandatory)</RequiredText></Label>
        <Input type="email" id="email" placeholder="example@gmail.com" />
        
        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" id="phone" placeholder="Your phone number" />
        
        <Label htmlFor="content">Message<RequiredText>(mandatory)</RequiredText></Label>
        <TextArea id="content" rows="4" placeholder="Describe your project here" />

        <Button disabled>Currently Full</Button>
      </FormWrapper>
    </ContactContainer>
  );
}

export default Contact;
