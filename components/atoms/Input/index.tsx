import React from 'react';
import StyledTextInput from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => <StyledTextInput {...props} />;

export default Input;
