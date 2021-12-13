import { ReactElement } from 'react';

export interface HeaderWithDescriptionProps {
  header: string;
  description: string | ReactElement;
}
