import React from 'react';

import {
  Container,
  Wrapper,
  Head,
  Title,
  Icons,
  BlockClient,
  Image,
  NameClient,
  NumberAccountClient,
  ForgotPassword,
  ForgotPasswordText,
  BlockOptions,
  ItemOption,
  OptionsText,
  VersionApp
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import ImageClient from '../../images/nextphoto.png';

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Head>
          <Icons name="logout" size={30} color="#000" />
          <Title>next</Title>
        </Head>
        <BlockClient>
          <Image source={ImageClient} />
          <NameClient>Jonathan da Silva Alves</NameClient>
          <NumberAccountClient>529099-0</NumberAccountClient>
        </BlockClient>
        <Input
          name="password"
          placeholder="Senha"
          autoCapitalize="none"
          returnKeyType="send"
        />
        <ForgotPassword>
          <ForgotPasswordText>
            <Icons name="keyboard-arrow-right" size={24} color="#000" />
            Esqueceu a senha
           </ForgotPasswordText>
        </ForgotPassword>
        <Button>Entrar</Button>
        <BlockOptions>
          <ItemOption>
            <Icons name="outlined-flag" size={30} color="#000" />
            <OptionsText>Atalhos</OptionsText>
          </ItemOption>
          <ItemOption>
            <Icons name="vpn-key" size={30} color="#000" />
            <OptionsText>Token</OptionsText>
          </ItemOption>
          <ItemOption>
            <Icons name="payments" size={30} color="#000" />
            <OptionsText>Pix</OptionsText>
          </ItemOption>
        </BlockOptions>
        <VersionApp>Versão 29.3.0(3434)</VersionApp>
      </Container>
    </Wrapper>
  );
}

export default SignIn;
