import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../components/Button';
import Input from '../../components/Input';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;
export const Container = styled.View`
  flex: 1;
  margin: 0px 10px;
`;
export const Head = styled.View`
  flex-direction: row;
  padding: 5%;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

export const InputForm = styled(Input)`
  color: #fff;
  border-bottom-color: #fff;
  border-bottom-width: 0.9px;
`;

export const Icons = styled(Icon)`
  width: 45%;
`;
export const Body = styled.View`
  flex: 1;
  margin-top: 80px;
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 30%;
  border-width: 2px;
  border-color: #7B7978;
`;
export const BlockShortcuts = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const ShortcutIcon = styled(Icon)`

`;
export const ShortcutName = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

export const VersionApp = styled.Text`
  text-align: right;
  color: #fff;
`;
export const IconForgot = styled(Icon)``;
export const ForgotPassword = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5%;
`;
export const ForgotPasswordText = styled.Text`
  color: #fff;
  text-align: center;
`;
