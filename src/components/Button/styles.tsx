import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  background: #000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color:${props => (props.color ? props.color : '#fff')};
  font-size: 16px;
  text-transform: uppercase;
`;
