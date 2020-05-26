import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';

const Card = styled.div`
  width: 60%;
  padding: 20px;
  margin: 20px auto;  

  border: 2px solid #a5d5ff;
  border-radius: 10px;
  
  transition: box-shadow 0.4s linear;

  &:hover {
    box-shadow: var(--neumo-shadow);
  }
`;

const Title = styled(Text)`
  color: var(--c-primary);
  margin-bottom: 10px;
  
`;

const CardText = styled(Text)`
  margin-bottom: 7px;
`;

const Block = styled.div`
  min-width: 40%;
`;

export default { Card, CardText, Title, Block };
