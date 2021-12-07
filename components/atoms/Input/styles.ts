import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.lightMuted};
  padding: 16px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.dark};
  border-width: 1px;
`;

export default StyledTextInput;
