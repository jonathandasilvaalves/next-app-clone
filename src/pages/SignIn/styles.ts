import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  margin: 0px 10px;
`;
export const Head = styled.View`
  flex-direction: row;
  padding: 5%;
  border-bottom-width: 0.5px;
  border-bottom-color: #999999;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Icons = styled(Icon)`
  width: 45%;
`;

export const BlockClient = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  padding: 5px;
  border-radius: 50px;
`;
export const NameClient = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const NumberAccountClient = styled.Text`
  color: #7B7978;
`;
export const ForgotPassword = styled.TouchableOpacity`
  flex-direction: row;
  margin: 24px 0;
  justify-content: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  color: #000;
  font-size: 16px;
`;
export const BlockOptions = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;
export const ItemOption = styled.View`
  width: 100px;
  height: 55px;
  margin-right: 10px;
  border-width: 1.5px;
  border-bottom-color: #999999;
  align-items: center;
  border-radius: 5px;
`;

export const OptionsText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
`;

export const VersionApp = styled.Text`
  text-align: right;
  margin: 10px 0;
`;
