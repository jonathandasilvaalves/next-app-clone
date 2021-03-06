import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  border-bottom-width: 0.9px;
  border-bottom-color: #000;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${props => (props.color ? props.color : "#000" )};
`;

export const TitleInput = styled.Text`
  color: #fff;
  font-size: 18px;

  ${props => props.effect && css`
    font-size: 12px;
    color: #666361;

  `}

  position: relative;
  bottom: ${props => (props.effect ? "0" : "-40px")};
`;
