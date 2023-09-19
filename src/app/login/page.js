"use client"

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
    margin: 0 auto;
    max-width: 600px;
    padding: 20px 0;
    padding-bottom: 50px;
    @font-face {
        font-family: 'KOTRA_GOTHIC';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/KOTRA_GOTHIC.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      font-family: 'KOTRA_GOTHIC';
`;

const Head = styled.div`
@font-face {
  font-family: 'Yeongdo-Rg';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
font-family: 'Yeongdo-Rg';
  font-size: 30px;
  margin: 0 auto;
  margin-top : 150px;
  max-width: 600px;
  padding: 20px 0;
  padding-bottom: 50px;
  text-align : center;
`;

const Put = styled.div`
  width : 100%;
  margin: 0 auto;
  text-align : center;

  .btn{
    width: 260px;
    height: 36px;
    border: none;
    border-radius: 5px;
    color: white;
    background: #5c4571;
    box-shadow: 3px 3px 8px -2px #2e2e2f;
    cursor: pointer;
  }
`;

const Input = styled.input`
    border: none;
    border-radius: 4px;
    width: 230px;
    height: 32px;
    padding: 0 15px;
    background: #706777;
    margin-bottom: 5px;
    color : white;

    &:focus{
        outline: none;
    }
`

const Hr = styled.hr`
  width: 330px;
  border : none;
  border-bottom : 1px solid #756f7f;
  margin : 35px auto;
`;

const Join = styled.div`
    width : 100%;
    margin: 0 auto;
    text-align : center;
`;

const Text = styled.div`
    font-size: 14px;
    color: white;
    margin-bottom: 10px;
    margin-top: -10px;
`

const A = styled.a`
    color : #d6c4e3;
    text-decoration : none;
`

export default function Login(){
    return(
        <Container>
            <Head><div><a> 오늘 뭐 볼래¿</a></div></Head>
            <Put>
                <form>
                    <div><Input type='text' placeholder='ID'></Input></div>
                    <div><Input type='password' placeholder='Password'></Input></div>
                    <button type='submit' className='btn'>LOGIN</button>
                </form>
            </Put>
            <Hr></Hr>
            <Join>
                <Text>아직 회원이 아니신가요?</Text>
                <div><A href='/join'>회원가입</A></div>
            </Join>
        </Container>
    )
}