import styled from 'styled-components';

const Card = styled.div`
  width: 60%;
  padding: 20px;
  margin: 20px auto;  

  border: 2px solid #a5d5ff;
  border-radius: 10px;
  
  transition: box-shadow 0.4s linear;

  &:hover {
    box-shadow: 5px 5px 7px 3px rgba(64,113,140,0.52);
  }
`;

const Title = styled.h4`
  color: var(--c-primary);
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin-bottom: 7px;
`;

const Block = styled.div`
  min-width: 40%;
`;

export default { Card, Text, Title, Block };
