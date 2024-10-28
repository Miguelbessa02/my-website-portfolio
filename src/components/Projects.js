import styled from 'styled-components';
//import aiProjectImage from '../assets/ai_project.jpg';
//import itravelImage from '../assets/itravel.jpg';

const ProjectsContainer = styled.section`
  padding: 50px;
  background-color: #1a1a1a;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #cccccc;
  max-width: 500px;
`;

const ProjectImage = styled.img`
  flex: 1;
  max-width: 400px;
  border-radius: 10px;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Title>Portfolio</Title>
      
      {/* AI Project */}
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectTitle>AI Project: Technical Problem Recognition</ProjectTitle>
          <ProjectDescription>
            Developed a system that uses NLP and machine learning to recognize and classify technical issues. This project utilizes TTS and Speech-to-Text, applying NLP algorithms for pattern recognition, making it effective for identifying and solving technical problems.
          </ProjectDescription>
        </ProjectInfo>
        {/*<ProjectImage src={aiProjectImage} alt="AI Project" />*/}
      </ProjectWrapper>

      {/* iTravel Project */}
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectTitle>iTravel - Web Application</ProjectTitle>
          <ProjectDescription>
            Created a full-stack web application using Laravel, allowing users to post and view travel-related advertisements. This project combines backend and frontend development with a user-friendly interface, providing a seamless experience for travel enthusiasts.
          </ProjectDescription>
        </ProjectInfo>
        {/*<ProjectImage src={itravelImage} alt="iTravel Project" />*/}
      </ProjectWrapper>

      {/* Additional projects can be added here */}
    </ProjectsContainer>
  );
}

export default Projects;
