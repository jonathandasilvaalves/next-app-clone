import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  colorText: string;
}

const Button: React.FC<ButtonProps> = ({ children, colorText, ...rest}) => {
  return(
    <Container {...rest}>
      <ButtonText color={colorText}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
