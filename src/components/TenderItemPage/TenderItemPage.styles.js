import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';

const Wrapper = styled.div`
  width: 70%;
  margin: 50px auto;

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media(max-width: var(--bp-md)) {
    width: 90%;
  }
`;

const Content = styled(Text)`
  display: inline;
`;

const ColoredText = styled(Text)`
  display: inline;
  margin-right: 10px;

  color: var(--c-primary-light);
  font-weight: bold;  
`;

const ContactsTitle = styled(Text)`
  color: var(--c-primary);
  font-weight: bold;
  text-align: center;
`;

const Description = styled(Text)`
  font-size: 22px;
`;

export default { Wrapper, Description, ColoredText, Content, ContactsTitle };
