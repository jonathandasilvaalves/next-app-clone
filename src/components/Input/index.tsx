import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextInput, TitleInput } from './styles';

const Input: React.FC = ({ children, icon, color, name, ...rest }) => {
  const [effect, setEffect] = useState(false);
  const [value, setValue] = useState('');

  function funcFocus() {
    setEffect(true);
  }
  function funcBlur() {
    if(!value) {
      setEffect(false);
    }
  }
  return (
    <>
      <TitleInput effect={effect}>{name}</TitleInput>
      <Container {...rest}>
        <TextInput color={color}
          onFocus={funcFocus}
          onBlur={funcBlur}
          onChange={value => setValue(value)}
        >{children}</TextInput>
        {icon &&
          (<Icon name="visibility" size={20} color="#01ff5f" />)
        }
      </Container>
    </>
  );
};

export default Input;
