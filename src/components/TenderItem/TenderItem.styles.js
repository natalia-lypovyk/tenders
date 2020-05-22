import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 60%;
  border: 2px solid #a5d5ff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;  
  transition: box-shadow 0.4s linear;

  &:hover {
    box-shadow: 5px 5px 7px 3px rgba(64,113,140,0.52);
  }
`;

export const StyledTitle = styled.h4`
  color: var(--c-primary);
  margin-bottom: 10px;
`;

export const StyledText = styled.p`
  margin-bottom: 7px;
`;

export const StyledDiv = styled.div`
  min-width: 40%;
`;