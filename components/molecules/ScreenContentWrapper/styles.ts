import styled, { css } from 'styled-components/native';
import { ScreenContentWrapperProps } from './types';

export const StyledScreenContentWrapper = styled.View<ScreenContentWrapperProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  ${({ areItemsCentered }) =>
    areItemsCentered &&
    css`
      align-items: center;
    `}
`;
