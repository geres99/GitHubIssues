import styled from 'styled-components/native';

export const StyledAnimatedLoaderContentWrapper = styled.View`
  height: 75px;
  width: 75px;
`;

export const StyledAnimatedLoaderSquare = styled.View`
  height: 30px;
  width: 30px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 15px;
`;
