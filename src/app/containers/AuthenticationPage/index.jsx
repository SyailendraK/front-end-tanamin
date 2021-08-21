import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import Logo from '../../components/logo';

import AuthBgImg from '../../../assets/images/AuthPage/bg-auth.png';

const AuthenticationContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-screen
    items-center
    overflow-x-hidden
  `}
`;

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    mt-32
    w-20
  `};
`;
const LoginButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    font-bold
    outline-none
    rounded-full
    text-white
    text-xs
    font-semibold
    border-0
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    mt-20
  `};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(to right, #479617 , #B3C765);
  width:80%;
`;

const RegisterButton = styled(LoginButton)`
  ${tw`
    bg-white
    mt-5
  `};
  background-image: none;
  color: #449515;
`;

const VegetableImgContainer = styled.div`
  ${tw`
    absolute
    bottom-0
    w-full
  `};
`;
// const LoginContainer = styled.div`
//   ${tw`
//     flex
//     flex-col
//     items-center
//     justify-center
//   `};
//   width: 70%;
// `;

// const LoginForm = styled.form`
//   ${tw`
//     flex
//     flex-wrap
//     items-center
//     w-full
//   `};

//   input{
//     ${tw`
//       my-3
//       rounded-lg
//     `}
//     width: 80%;
//     padding: 6px 10px;
//     border: 1px solid #ddd;
//   }
// `;

export default function HomePage() {
  // const [email, setEmail] = useState('email');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <AuthenticationContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LoginButton>Masuk</LoginButton>
      <RegisterButton>Daftar</RegisterButton>
      {/* <LoginForm onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </LoginForm> */}
      <VegetableImgContainer>
        <img src={AuthBgImg} alt="Vegetable Background" />
      </VegetableImgContainer>
    </AuthenticationContainer>
  );
}
