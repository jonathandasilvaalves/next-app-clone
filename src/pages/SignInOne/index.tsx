import React from 'react';

import {
  Wrapper,
  Container,
  Head,
  Title,
  Body,
  Icons,
  ButtonSubmit,
  BlockShortcuts,
  ShortcutIcon,
  ShortcutName,
  VersionApp,
  InputForm,
  ForgotPassword,
  ForgotPasswordText,
  IconForgot
 } from './styles';



const SignInOne: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Head>
          <Icons name="keyboard-arrow-left" size={40} color="#01ff5f" />
          <Title>Entrar</Title>
        </Head>
        <Body>
          <InputForm
            name="CPF"
            placeholder="CPF"
            autoCapitalize="none"
            returnKeyType="send"
            icon={false}
            color="#fff"
          />
          <InputForm
            name="Senha"
            placeholder="Senha"
            autoCapitalize="none"
            returnKeyType="send"
            icon
            color="#fff"
          />
          <ForgotPassword>
            <IconForgot name="keyboard-arrow-right" size={24} color="#01ff5f" />
            <ForgotPasswordText>
              Esqueceu a senha
            </ForgotPasswordText>
          </ForgotPassword>
          <ButtonSubmit colorText='#7B7978'>Entrar</ButtonSubmit>
          <BlockShortcuts>
            <ShortcutIcon name="bookmark-border" size={30} color="#fff" />
            <ShortcutName>Atalhos</ShortcutName>
          </BlockShortcuts>
        </Body>
        <VersionApp>Versão 29.3.0(3434)</VersionApp>
      </Container>
    </Wrapper>
  );
}

export default SignInOne;
