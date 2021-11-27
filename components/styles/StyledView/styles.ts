import styled from 'styled-components/native';
import { flexbox, layout, space } from 'styled-system';
import { StyledViewProps } from './types';

const StyledView = styled.View<StyledViewProps>`
  ${space};
  ${flexbox};
  ${layout};
`;

export default StyledView;
