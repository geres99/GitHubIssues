import styled from 'styled-components/native';
import { ScreenContentWrapperProps } from './types';

export const StyledScreenContentWrapper = styled.View<ScreenContentWrapperProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
  justify-content: ${({ areItemsCentered }) =>
    areItemsCentered ? 'center' : 'flex-start'};
  align-items: ${({ areItemsCentered }) =>
    areItemsCentered ? 'center' : 'flex-start'};
`;
